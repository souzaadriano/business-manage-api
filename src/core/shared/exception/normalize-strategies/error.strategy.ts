import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';
import { INormalizeExceptionStrategy } from './normalize-exception-strategy.contract.js';

class ErrorException extends AbstractException {
  readonly code = EXCEPTION_CODE.UNKNOWN;

  constructor(error: Error) {
    super(error.message);
    this.stack = error.stack;
    this.cause = error.cause;
    this.setDetail('errorName', error.name);
  }
}

export class ErrorStrategy implements INormalizeExceptionStrategy {
  shouldUse(error: unknown): boolean {
    return error instanceof Error;
  }

  handle(error: Error): AbstractException {
    return new ErrorException(error);
  }
}
