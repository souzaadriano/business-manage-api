import { PID_CONTEXT } from '@/core/shared/class/pid/pid-context.enum';
import { Pid } from '@/core/shared/class/pid/pid.class';
import { AbstractEvent } from '@/modules/event/class/abstract-event.abstract';
import { EVENT_NAME } from '@/modules/event/types/event-names.enum';
import { DATABASE_OPERATION } from '../database-operation.enum';

export class DatabaseQueryEvent extends AbstractEvent<TDatabaseEvent> {
  readonly pid = Pid.create(PID_CONTEXT.DATABASE_QUERY);
  readonly name = EVENT_NAME.DATABASE_QUERY;
}

export type TDatabaseEvent = {
  operation: DATABASE_OPERATION;
  statement: string;
  executeTimeInMs: number;
};
