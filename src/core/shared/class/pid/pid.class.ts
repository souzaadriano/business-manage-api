import { DateTime } from '../date-time/date-time.class';
import { Uuid } from '../uuid/uuid.class';
import { NegativeTimestampException } from './exceptions/negative-timestamp.exception';
import { pidContextHelper } from './pid-context.enum';

export class Pid {
  private readonly _id: Uuid;
  readonly date: DateTime;
  readonly context: string;

  constructor(input: TPidConstructor) {
    this._isNotNegativeTimestamp(input.date);
    this._id = input.id;
    this.date = input.date;
    this.context = input.context;
  }

  static create(context: string) {
    return new Pid({
      context: context,
      date: DateTime.now(),
      id: Uuid.create(),
    });
  }

  static parse(pid: string) {
    const [dateInTimestamp, context, id] = pid.split(':');
    const timestamp = Number(dateInTimestamp);
    return new Pid({
      id: new Uuid(id),
      context: pidContextHelper.check(context),
      date: DateTime.fromTimestamp(timestamp),
    });
  }

  get value() {
    return `${this.date.timestamp()}:${this.context}:${this._id.value}`;
  }

  private _isNotNegativeTimestamp(date: DateTime) {
    if (date.timestamp() < 0) throw new NegativeTimestampException(date.timestamp());
  }
}

export type TPidConstructor = {
  id: Uuid;
  date: DateTime;
  context: string;
};
