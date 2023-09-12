import { Log } from '@/core/shared/class/log/log.class';
import { TJsonValue } from '@/core/shared/types/json-document.type';
import { PinoFactory } from './pino.factory';

export abstract class Loggers {
  private static readonly _logger = PinoFactory.factory();
  private static readonly _loggers = new Map<string, Log>();

  static init() {
    this._logger.info('[LOGGER] Started');
  }

  static get(pid: string) {
    const log = Loggers._loggers.get(pid);
    if (!log) Loggers._logger.error(new Error(`log ${pid} not found`));
    return log;
  }

  static add(log: Log) {
    Loggers._loggers.set(log.pid.value, log);
    this.print('Loggers', `Have ${this._loggers.size} logs in process`);
  }

  static emit(log: Log | string) {
    log instanceof Log ? Loggers._emitByLog(log) : Loggers._emitByPid(log);
    this.print('Loggers', `Have ${this._loggers.size} logs in process`);
  }

  static print(context: string, message: TJsonValue) {
    if (typeof message === 'object') {
      Array.isArray(message)
        ? this._logger.info({ context, content: message })
        : this._logger.info({ context, ...message });
    }
    this._logger.info(`[${context.toUpperCase()}]: ${message}`);
  }

  private static _emitByLog(log: Log) {
    Loggers._loggers.delete(log.pid.value);
    Loggers._logger.info(log.data());
  }

  private static _emitByPid(pid: string) {
    const log = Loggers.get(pid);
    Loggers._emitByLog(log);
  }
}
