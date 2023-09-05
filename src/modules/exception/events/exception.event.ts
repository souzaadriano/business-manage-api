import { PID_CONTEXT } from '@/core/shared/class/pid/pid-context.enum';
import { Pid } from '@/core/shared/class/pid/pid.class';
import { AbstractException } from '@/core/shared/exception/exception.abstract';
import { AbstractEvent } from '@/modules/event/class/abstract-event.abstract';
import { EVENT_NAME } from '@/modules/event/types/event-names.enum';

export class ExceptionEvent extends AbstractEvent<AbstractException> {
  pid = Pid.create(PID_CONTEXT.EXCEPTION);
  name = EVENT_NAME.EXCEPTION;

  constructor(exception: AbstractException) {
    super(exception);
    this.pid = exception.pid;
  }
}
