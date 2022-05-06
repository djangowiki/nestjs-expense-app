import { data, ReportType } from '../data';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from '../dtos/report.dtos';

interface Report {
  amount: number;
  source: string;
}

interface updateReport {
  amount?: number;
  source?: string;
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report.filter((report) => report.type === type).map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report.filter((report) => report.type === type).find((report) => report.id === id);
    if (!report) return;
    return new ReportResponseDto(report);
  }

  createReport(type: ReportType, body: Report): ReportResponseDto {
    const newReport = {
      id: uuid(),
      amount: body.amount,
      source: body.source,
      created_at: new Date(),
      updated_at: new Date(),
      type
    };
    data.report.push(newReport);
    // return {
    //   id: newReport.id,
    //   amount: newReport.amount,
    //   source: newReport.source,
    //   createdAt: newReport.created_at,
    //   type: newReport.type
    // }; there is a better way of doing this Nestjs.

    return new ReportResponseDto(newReport);
  }

  updateReport(type: ReportType, body: updateReport, id: string): ReportResponseDto {
    const reportToUpdate = data.report.filter((report) => report.type === type).find((report) => report.id === id);
    if (!reportToUpdate) return;
    const reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id);
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date()
    };
    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}
