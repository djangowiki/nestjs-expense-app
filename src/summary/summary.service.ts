import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
// So in here this is where our business logice lives.
// We want to first of all get all the reports. 
// But how are we supposed to get the method getAllReports from the report directory to our summary
// directory and use it in the service file.
// Well, we can start by injecting that particular service inside the summary module. We add it in the
// providers.
// 

constructor(private readonly reportService:ReportService){}
  calculateSummary() {
      const totalExpenses = this.reportService.getAllReports(ReportType.EXPENSE).reduce((sum, report) => sum + report.amount, 0)
      const totalIncome = this.reportService.getAllReports(ReportType.INCOME).reduce((sum, report) => sum + report.amount, 0)
      return {
        totalIncome: totalIncome,
        totalExpense: totalExpenses,
        netIncome: totalIncome - totalExpenses
    }
  }
}
