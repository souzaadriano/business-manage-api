import { defaultDateFormatStrategy } from '../class/date-time/format-strategies';
import { PID_CONTEXT } from '../class/pid/pid-context.enum';
import { Pid } from '../class/pid/pid.class';
import { TJsonDocument, TJsonValue } from '../types/json-document.type';
import { EXCEPTION_CODE } from './exception-code.enum';

export abstract class AbstractException extends Error {
  abstract readonly code: EXCEPTION_CODE;
  readonly issuedAt = new Date(); // DateTime.now();
  private readonly _forbbidenProperties = new Set(['_issuedAt', '_message', '_name', '_trace', '_code']);
  private readonly _details = new Map<string, TJsonValue>();
  readonly pid: Pid;

  constructor(message: string, pid?: Pid) {
    super(message);
    this.pid = pid ?? Pid.create(PID_CONTEXT.EXCEPTION);
  }

  protected setDetail(key: string, value: TJsonValue) {
    if (this._forbbidenProperties.has(key)) throw new Error(`Invalid `);
    this._details.set(key, value);
  }

  getDetails(): TJsonDocument {
    const details = Object.fromEntries(this._details.entries());
    details['_issuedAt'] = defaultDateFormatStrategy.handle(this.issuedAt); //this.issuedAt.format();
    details['_message'] = this.message;
    details['_name'] = this.name;
    details['_trace'] = this.stack;
    details['_cause'] = (this.cause as TJsonValue) ?? 'empty';
    details['_code'] = this.code;

    return details;
  }

  getDetail(key: string): TJsonValue | undefined {
    return this._details.get(key);
  }
}
