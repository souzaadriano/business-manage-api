import { DATE_FORMAT } from './date-format.enum';
import { TDateInterval } from './date-interval.type';
import { InvalidTimestampException } from './exceptions/invalid-timestamp.exception';
import { FormatStrategyHandler } from './format-strategies/format-strategy.handler';

export class DateTime {
  readonly value: Date;

  constructor(date: Date) {
    this.value = date;
  }

  static now() {
    return new DateTime(new Date());
  }

  static fromTimestamp(timestamp: number) {
    if (Number.isNaN(timestamp)) throw new InvalidTimestampException(timestamp);
    return new DateTime(new Date(timestamp));
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
