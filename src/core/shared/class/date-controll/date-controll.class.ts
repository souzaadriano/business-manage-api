import { DateTime } from '../date-time/date-time.class';

export class DateControll {
  readonly createdAt: DateTime;
  readonly updatedAt: DateTime;
  readonly deletedAt: DateTime | null;

  constructor(input: TDateControllConstructor) {
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
    this.deletedAt = input.deletedAt;
  }

  static create(): DateControll {
    const date = DateTime.now();
    return new DateControll({
      createdAt: date,
      updatedAt: date,
      deletedAt: null,
    });
  }
}

type TDateControllConstructor = {
  createdAt: DateTime;
  updatedAt: DateTime;
  deletedAt: DateTime | null;
};
