import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';

export class ParseObjectException extends AbstractException {
  readonly code = EXCEPTION_CODE.REDIS;

  constructor(key: string, value: string) {
    super(`Error on parse to object key ${key}`);
    this.setDetail('key', key);
    this.setDetail('keyValue', value);
  }
}
