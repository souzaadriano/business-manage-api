import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';
import { INormalizeExceptionStrategy } from './normalize-exception-strategy.contract.js';
class UnknownException extends AbstractException {
  readonly code = EXCEPTION_CODE.UNKNOWN;
  constructor(error: any) {
    super(error.toString ? error.toString() : String(error));
    this.setDetail('unknown_error', error);
  }
}

export class UnknownStrategy implements INormalizeExceptionStrategy {
  shouldUse(): boolean {
    return true;
  }

  handle(error: unknown): AbstractException {
    return new UnknownException(error);
  }
}
