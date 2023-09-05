import { InvalidEnumValueException } from './exceptions/invalid-enum-value.exception';

export class EnumHelper<T> {
  private readonly _enumSet: Set<string>;
  readonly name: string;

  constructor(name: string, input: T) {
    this._enumSet = new Set<string>(Object.values(input));
    this.name = name;
  }

  check(value: string): T[keyof T] {
    if (!this._enumSet.has(value)) throw new InvalidEnumValueException<T>(value, this.name, this.values());
    return value as T[keyof T];
  }

  values(): T[keyof T][] {
    return Array.from(this._enumSet.values()) as T[keyof T][];
  }
}
