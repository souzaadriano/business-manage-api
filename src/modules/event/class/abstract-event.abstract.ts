import { EVENT_NAME } from '../types/event-names.enum';

export abstract class AbstractEvent<T> {
  readonly message: T;
  abstract pid: string;
  abstract readonly name: EVENT_NAME;

  constructor(message: T) {
    this.message = message;
  }
}
