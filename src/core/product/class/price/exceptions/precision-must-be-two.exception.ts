import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';

export class PricePrecisionMustBeTwoException extends AbstractException {
  readonly code = EXCEPTION_CODE.INVALID_INPUT;
  constructor(value: number, precision: number) {
    super(`value muest be max precision two and got ${precision} on value ${value}`);
    this.setDetail('precision', precision);
    this.setDetail('value', value);
  }
}
