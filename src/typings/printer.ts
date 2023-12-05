export enum PrinterStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

export interface Printer {
  id: number;
  printerId: string;
  name: string;
  address: string;
  startedAt: number;
  onQueue: number;
  totalPrinted: number;
  printedToday: number;
  status: PrinterStatus;
  paperSlot: number;
}
