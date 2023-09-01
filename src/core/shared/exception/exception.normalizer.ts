import { AbstractException } from './exception.abstract';
import { ErrorStrategy } from './normalize-strategies/error.strategy';
import { ExceptionStrategy } from './normalize-strategies/exception.strategy';
import { INormalizeExceptionStrategy } from './normalize-strategies/normalize-exception-strategy.contract';
import { StringStrategy } from './normalize-strategies/string.strategy';
import { UnknownStrategy } from './normalize-strategies/unknown.strategy';

export abstract class ExceptionNormalizer {
  private static readonly _unknownStrategy = new UnknownStrategy();
  private static readonly _strategies: INormalizeExceptionStrategy[] = [
    new ExceptionStrategy(),
    new ErrorStrategy(),
    new StringStrategy(),
  ];

  static handle(error: unknown): AbstractException {
    const strategy = ExceptionNormalizer._strategies.find((strategy) => strategy.shouldUse(error));
    return strategy ? strategy.handle(error) : ExceptionNormalizer._unknownStrategy.handle(error);
  }
}
