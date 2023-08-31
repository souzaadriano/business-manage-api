import { TDateInterval } from './date-interval.type';

export class DateTime {
  readonly value: Date;
  readonly timestamp: number;

  constructor(date: Date) {
    this.value = date;
    this.timestamp = date.getTime();
  }

  isBetween(interval: TDateInterval): boolean {
    const { begin, end } = interval;
    if (this.isAfter(begin) && this.isBefore(end)) return true;
    if (this.isEqual(begin) || this.isEqual(end)) return true;
    return false;
  }

  isAfter(date: Date): boolean {
    return this.timestamp > date.getTime();
  }

  isBefore(date: Date): boolean {
    return this.timestamp < date.getTime();
  }

  isEqual(date: Date): boolean {
    return this.timestamp === date.getTime();
  }
}
