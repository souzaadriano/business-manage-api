import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';

export class InvalidEnumValueException<T> extends AbstractException {
  readonly code = EXCEPTION_CODE.INVALID_INPUT;

  constructor(value: string, enumName: string, options: T[keyof T][]) {
    super(`value ${value} not exists on enum ${enumName}`);
    this.setDetail('enumValue', value);
    this.setDetail('enum', enumName);
    this.setDetail('enumItens', options as string[]);
  }
}
