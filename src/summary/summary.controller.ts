import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  // We are trying to inject the service in using the constructor.
//   This private readonly means that we dont want to modify it in any way,
// we just want to utilize it.
// private readonly get the summaryService and type it with the SummaryService class.
// So that's pretty much all we have to do. Inside the method, we just have to start using the service.
constructor(private readonly summaryService:SummaryService) {}
  @Get()
  getSummary() {
    console.log('Testing')
      return this.summaryService.calculateSummary()
  }
}
