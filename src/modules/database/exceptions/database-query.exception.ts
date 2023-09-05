import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';
import { DATABASE_OPERATION } from '../database-operation.enum';

export class DatabaseQueryException extends AbstractException {
  readonly code = EXCEPTION_CODE.DATABASE;

  constructor(input: TDatabaseErrorParameters) {
    super(input.error instanceof Error ? input.error.message : 'unknown database error');
    if (input.operation) this.setDetail('operation', input.operation);
    if (input.statement) this.setDetail('statement', input.operation);
  }
}

type TDatabaseErrorParameters = {
  error: unknown;
  operation?: DATABASE_OPERATION;
  statement?: string;
};
