import { AbstractException } from '@/core/shared/exception/exception.abstract';
import { INormalizeExceptionStrategy } from './normalize-exception-strategy.contract.js';

export class ExceptionStrategy implements INormalizeExceptionStrategy {
  shouldUse(error: unknown): boolean {
    return error instanceof AbstractException;
  }

  handle(error: AbstractException): AbstractException {
    return error;
  }
}
