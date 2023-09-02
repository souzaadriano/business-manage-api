import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';

export class PriceMustBePositiveException extends AbstractException {
  readonly code = EXCEPTION_CODE.INVALID_INPUT;
  constructor(value: number) {
    super(`Price value must be a positive number`);
    this.setDetail('priceValue', value);
  }
}
