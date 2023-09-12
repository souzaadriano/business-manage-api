import { Log } from '@/core/shared/class/log/log.class';
import { TJsonValue } from '@/core/shared/types/json-document.type';
import { Injectable } from '@nestjs/common';
import { Loggers } from '../loggers';
import { ILoggerService } from './logger.contract';

@Injectable()
export class LoggerService implements ILoggerService {
  private readonly _loggers = Loggers;

  get(pid: string): Log {
    return this._loggers.get(pid);
  }

  add(log: Log): void {
    this._loggers.add(log);
  }

  emit(log: string | Log): void {
    this._loggers.emit(log);
  }

  print(context: string, message: TJsonValue): void {
    this._loggers.print(context, message);
  }
}
