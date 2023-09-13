import { Log } from '@/core/shared/class/log/log.class';
import { Pid } from '@/core/shared/class/pid/pid.class';
import { ExceptionNormalizer } from '@/core/shared/exception/exception.normalizer';
import { LoggerService } from '../adapters/logger.adapter';

export abstract class AbstractInstrumentation {
  protected readonly _log: Log;

  constructor(context: string, private readonly _logger: LoggerService) {
    const upperContext = context.toUpperCase();
    this._log = Log.create(upperContext, Pid.create(upperContext));
  }

  emit() {
    this._logger.emit(this._log);
  }

  setException(error: unknown) {
    const exception = ExceptionNormalizer.handle(error);
    this._log.exception(exception);
    this._logger.emit(this._log);
  }
}
