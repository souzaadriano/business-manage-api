import { randomUUID } from 'crypto';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  static factory() {
    return new Uuid(randomUUID());
  }
}
