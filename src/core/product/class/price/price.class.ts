import { PriceMustBePositiveException } from './exceptions/must-be-positive.exception';
import { PricePrecisionMustBeTwoException } from './exceptions/precision-must-be-two.exception';

export class Price {
  constructor(readonly value: number) {
    this._isPrecisionTwo(value);
    this._isBiggerThanZero(value);
  }

  private _isBiggerThanZero(value: number) {
    if (value < 0) throw new PriceMustBePositiveException(value);
  }

  private _isPrecisionTwo(value: number) {
    const [_, precision] = value.toString().split('.');
    if (precision.length > 2) throw new PricePrecisionMustBeTwoException(value, Number(precision));
  }
}
