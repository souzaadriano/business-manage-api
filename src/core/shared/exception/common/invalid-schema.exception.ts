import { EXCEPTION_CODE } from '../exception-code.enum';
import { AbstractException } from '../exception.abstract';
import { EXCEPTION_DETAILS } from './exception-details.enum';

export class InvalidSchemaException extends AbstractException {
  readonly code = EXCEPTION_CODE.INVALID_SCHEMA;

  constructor(data: TInvalidSchemaData[], schema: string) {
    super(`Invalid schema ${schema}`);
    this.setDetail(EXCEPTION_DETAILS.REASON, data);
  }
}

export type TInvalidSchemaData = {
  target: string;
  reason: string[];
};
