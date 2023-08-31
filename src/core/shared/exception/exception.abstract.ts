import { DateTime } from '../class/date-time/date-time.class';
import { TJsonDocument, TJsonValue } from '../types/json-document.type';
import { EXCEPTION_CODE } from './exception-code.enum';

export abstract class AbstractException extends Error {
  abstract readonly code: EXCEPTION_CODE;
  readonly issuedAt = DateTime.now();
  private readonly _forbbidenProperties = new Set(['_issuedAt', '_message', '_name', '_trace', '_code']);
  private readonly _details: Map<string, TJsonValue> = new Map();

  protected setDetail(key: string, value: TJsonValue) {
    if (this._forbbidenProperties.has(key)) throw new Error(``);
    this._details.set(key, value);
  }

  getDetails(): TJsonDocument {
    const details = Object.fromEntries(this._details.entries());
    details['_issuedAt'] = this.issuedAt.format();
    details['_message'] = this.message;
    details['_name'] = this.name;
    details['_trace'] = this.stack;
    details['_cause'] = (this.cause as TJsonValue) ?? 'empty';
    details['_code'] = this.code;

    return details;
  }
}
