import { LoggerService } from '../logger/adapters/logger.adapter';
import { AbstractInstrumentation } from '../logger/contracts/instrumentation.abstract';
import { DATABASE_OPERATION } from './database-operation.enum';

export class DatabaseInstrumentation extends AbstractInstrumentation {
  constructor(logger: LoggerService) {
    super('database', logger);
  }

  setOperation(operation: DATABASE_OPERATION) {
    this._log.set('operation', operation);
  }

  setStatement(statement: string) {
    this._log.set('statement', statement);
  }

  setExecutionTime(executionTime: number) {
    this._log.set('executionTime', executionTime);
  }
}
