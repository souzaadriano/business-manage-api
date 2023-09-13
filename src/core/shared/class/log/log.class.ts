import { AbstractException } from '../../exception/exception.abstract';
import { TJsonDocument, TJsonValue } from '../../types/json-document.type';
import { DateTime } from '../date-time/date-time.class';
import { Pid } from '../pid/pid.class';
import { Stopwatch } from '../stopwatch/stopwatch.class';
import { LogValueHandler } from './log-value';

export class Log {
  private readonly _stopwatch: Stopwatch;
  private readonly _data: Map<string, TJsonValue>;
  private _status: TLogStatus = 'SUCCESS';
  private _closed: boolean;

  readonly context: string;
  readonly pid: Pid;

  private constructor(context: string, pid: Pid) {
    this.pid = pid;
    this.context = context;
    this._stopwatch = Stopwatch.create(context);
    this._data = new Map([
      ['context', context],
      ['pid', pid.value],
    ]);
  }

  static create(context: string, pid: Pid) {
    return new Log(context, pid);
  }

  set(key: string, value?: TJsonValue) {
    value ? this._setValue(key, value) : this._setStep(key);
  }

  get<T extends TJsonValue>(key: string): T | undefined {
    return this._data.get(key) as T | undefined;
  }

  isException() {
    return this._status === 'FAIL';
  }

  data(): TJsonDocument {
    if (!this._closed) this._setDefaultValues();
    return Object.fromEntries(this._data.entries());
  }

  exception(exception: AbstractException) {
    this._setValue('exception', exception.getDetails());
    this._status = 'FAIL';
    return this.data();
  }

  private _setDefaultValues() {
    this._closed = true;
    this._stopwatch.stop();
    const { steps, total } = this._stopwatch.result();

    this._setValue('__issuedAt', this.pid.date.format());
    this._setValue('__timers', steps);
    this._setValue('__elapsedTime', total);
    this._setValue('__status', this._status);
  }

  private _setValue(key: string, value: TJsonValue) {
    const handler = new LogValueHandler(key, value, this._data.get(key));
    const input = handler.handle();

    this._data.set(input.key, input.value);
    this._stopwatch.step(input.key);
  }

  private _setStep(key: string) {
    const dateTime = DateTime.now();
    this._stopwatch.step(key);
    this._data.set(key, { stepAt: dateTime.format() });
  }
}

type TLogStatus = 'SUCCESS' | 'FAIL';
