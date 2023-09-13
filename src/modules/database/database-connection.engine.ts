import { databaseConfig } from '@/configuration';
import { Stopwatch } from '@/core/shared/class/stopwatch/stopwatch.class';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PreparedQuery } from '@pgtyped/runtime';
import { Client } from 'pg';
import { LoggerService } from '../logger/adapters/logger.adapter';
import { DATABASE_OPERATION } from './database-operation.enum';
import { DatabaseInstrumentation } from './database.instrumentation';
import { DatabaseQueryException } from './exceptions/database-query.exception';

@Injectable()
export class DatabaseConnectionEngine implements OnModuleInit {
  private readonly configuration = databaseConfig;
  private _client: Client;

  constructor(private readonly _logger: LoggerService) {}

  async onModuleInit() {
    this._client = new Client({
      host: this.configuration.host,
      port: this.configuration.port,
      password: this.configuration.password,
      user: this.configuration.user,
      database: this.configuration.name,
    });

    await this._client.connect();
  }

  insert<INPUT, OUTPUT>(statement: string, fn: PreparedQuery<INPUT, OUTPUT>): TExecuteCommand<INPUT> {
    return this._execute(statement, DATABASE_OPERATION.INSERT, fn);
  }

  delete<INPUT, OUTPUT>(statement: string, fn: PreparedQuery<INPUT, OUTPUT>): TExecuteCommand<INPUT> {
    return this._execute(statement, DATABASE_OPERATION.DELETE, fn);
  }

  update<INPUT, OUTPUT>(statement: string, fn: PreparedQuery<INPUT, OUTPUT>): TExecuteCommand<INPUT> {
    return this._execute(statement, DATABASE_OPERATION.UPDATE, fn);
  }

  select<INPUT, OUTPUT>(statement: string, fn: PreparedQuery<INPUT, OUTPUT>): TQueryCommand<INPUT, OUTPUT[]> {
    return this._query(statement, DATABASE_OPERATION.SELECT, fn);
  }

  first<INPUT, OUTPUT>(statement: string, fn: PreparedQuery<INPUT, OUTPUT>): TQueryCommand<INPUT, OUTPUT> {
    return this._queryOne(statement, DATABASE_OPERATION.SELECT, fn);
  }

  upsert<INPUT, OUTPUT>(statement: string, fn: PreparedQuery<INPUT, OUTPUT>): TExecuteCommand<INPUT> {
    return this._execute(statement, DATABASE_OPERATION.UPSERT, fn);
  }

  private _query<INPUT, OUTPUT>(statement: string, operation: DATABASE_OPERATION, fn: PreparedQuery<INPUT, OUTPUT>) {
    return async (params: INPUT): Promise<OUTPUT[]> => {
      const instrumentation = new DatabaseInstrumentation(this._logger);
      instrumentation.setOperation(operation);
      instrumentation.setStatement(statement);
      try {
        const stopwatch = Stopwatch.create('query');
        const data = fn.run(params, this._client);
        const { total } = stopwatch.result();
        instrumentation.setExecutionTime(total);
        instrumentation.emit();
        return data;
      } catch (error) {
        const exception = new DatabaseQueryException({ error, operation, statement });
        instrumentation.setException(exception);
        throw exception;
      }
    };
  }

  private _queryOne<INPUT, OUTPUT>(statement: string, operation: DATABASE_OPERATION, fn: PreparedQuery<INPUT, OUTPUT>) {
    const executor = this._query(statement, operation, fn);
    return async (params: INPUT): Promise<OUTPUT | undefined> => {
      const [output] = await executor(params);
      return output;
    };
  }

  private _execute<INPUT, OUTPUT>(statement: string, operation: DATABASE_OPERATION, fn: PreparedQuery<INPUT, OUTPUT>) {
    const executor = this._query(statement, operation, fn);
    return async (params: INPUT): Promise<void> => {
      await executor(params);
    };
  }
}

export type TExecuteCommand<INPUT> = (params: INPUT) => Promise<void>;
export type TQueryCommand<INPUT, OUTPUT> = (params: INPUT) => Promise<OUTPUT>;
