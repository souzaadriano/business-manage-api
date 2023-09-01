import { TGenericInterval } from '../../types/generic-interval.type';

export class IsBetwwen<T> {
  constructor(private readonly _range: TGenericInterval<T>) {}

  validate(value: T): boolean {
    const { begin, end } = this._range;
    return value >= begin && value <= end;
  }
}
