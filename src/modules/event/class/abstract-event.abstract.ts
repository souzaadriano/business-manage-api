import { Pid } from '@/core/shared/class/pid/pid.class';
import { EVENT_NAME } from '../types/event-names.enum';

export abstract class AbstractEvent<T> {
  readonly message: T;
  abstract pid: Pid;
  abstract readonly name: EVENT_NAME;

  constructor(message: T) {
    this.message = message;
  }
}
