// Create enum for the type of report.
export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense'
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 6000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME
    },
    {
      id: 'uuid2',
      source: 'Slot',
      amount: 200000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME
    },
    {
      id: 'uuid3',
      source: 'Crypto',
      amount: 1000000000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME
    },
    {
      id: 'uuid4',
      source: 'Food',
      amount: 200000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE
    }
  ]
};

// Create the interface for the report array.
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

// data.report.push({
//   id: 'uuid',
//   source: 'Expense Tracker',
//   amount: 500,
//   created_at: new Date(),
//   updated_at: new Date(),
//   type: ReportType.INCOME
// });
