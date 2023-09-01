import { AbstractException } from '@/core/shared/exception/exception.abstract';

export interface INormalizeExceptionStrategy {
  shouldUse(error: unknown): boolean;
  handle(error: unknown): AbstractException;
}
