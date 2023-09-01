import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';
import { INormalizeExceptionStrategy } from './normalize-exception-strategy.contract.js';

class StringErrorException extends AbstractException {
  readonly code = EXCEPTION_CODE.UNKNOWN;
}

export class StringStrategy implements INormalizeExceptionStrategy {
  shouldUse(error: unknown): boolean {
    return typeof error === 'string';
  }

  handle(error: string): AbstractException {
    return new StringErrorException(error);
  }
}
