import { CreateReportDto, ReportResponseDto, UpdateReportDto } from '../dtos/report.dtos';
import { Controller, Param, Delete, Get, Post, Put, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from '@nestjs/common';
import { data, ReportType } from '../data';
import { ReportService } from './report.service';
import { v4 as uuid } from 'uuid';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) { }
  @Get()
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto[] {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllReports(reportType);
    // return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string): ReportResponseDto {
    // console.log({ type, id });
    // console.log(id, typeof id);
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id);
  }

  @Post()
  createReport(@Body() body: CreateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, body);
  }

  @Put(':id')
  updateReport(@Body() body: UpdateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string): ReportResponseDto {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.updateReport(reportType, body, id);
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportService.deleteReport(id);
  }
}
