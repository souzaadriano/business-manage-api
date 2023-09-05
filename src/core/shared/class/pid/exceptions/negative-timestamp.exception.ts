import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';

export class NegativeTimestampException extends AbstractException {
  readonly code = EXCEPTION_CODE.INVALID_INPUT;

  constructor(timestamp: number) {
    super(`Negative timestamp is not accepted, getted value ${timestamp}`);
    this.setDetail('timestamp', timestamp);
  }
}
