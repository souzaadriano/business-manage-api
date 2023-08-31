import { DATE_FORMAT } from './date-format.enum';
import { TDateInterval } from './date-interval.type';
import { FormatStrategyHandler } from './format-strategies/format-strategy.handler';

export class DateTime {
  readonly value: Date;

  constructor(date: Date) {
    this.value = date;
  }

  static now() {
    return new DateTime(new Date());
  }

  isBetween(interval: TDateInterval): boolean {
    const { begin, end } = interval;
    if (this.isAfter(begin) && this.isBefore(end)) return true;
    if (this.isEqual(begin) || this.isEqual(end)) return true;
    return false;
  }

  isAfter(date: Date): boolean {
    return this.timestamp() > date.getTime();
  }

  isBefore(date: Date): boolean {
    return this.timestamp() < date.getTime();
  }

  isEqual(date: Date): boolean {
    return this.timestamp() === date.getTime();
  }

  format(format?: DATE_FORMAT): string {
    return FormatStrategyHandler.format(this.value, format ?? DATE_FORMAT.DEFAULT);
  }

  timestamp(): number {
    return this.value.getTime();
  }
}
