import { TJsonValue } from '@/core/shared/types/json-document.type';

export class LogValueHandler {
  private readonly _key: string;
  private readonly _value: TJsonValue;
  private _version = 0;
  private _data: TJsonValue | undefined;

  constructor(key: string, value: TJsonValue, data?: TJsonValue) {
    this._key = key;
    this._value = value;
    this._data = data;
    this._setVersion();
  }

  handle() {
    return { key: this._key, value: this._buildValue() };
  }

  private _setVersion() {
    if (this._data === undefined) return;
    const currentVersion = this.getVersion();
    if (currentVersion === 0) this._version = 1;
    this._version = currentVersion + 1;
  }

  private getVersion() {
    return this._data['__version'] ?? 0;
  }

  private _buildValue(): any {
    if (this._version === 0) return this._value;
    if (this._version === 1) return { v0: this._data, v1: this._value };
    const result = this._data as any;
    result.__version = this._version;
    result[`v${this._version}`] = this._value;

    return result;
  }
}
