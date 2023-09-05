import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';

export class InvalidTimestampException extends AbstractException {
  readonly code = EXCEPTION_CODE.INVALID_INPUT;
  constructor(value: number) {
    super(`Invalid timestamp ${value}`);
    this.setDetail('timestamp', value);
  }
}
