import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ClassConstructor } from 'class-transformer';
import { AbstractEvent } from '../../class/abstract-event.abstract';
import { EVENT_NAME } from '../../types/event-names.enum';

@Injectable()
export class EventPublisher {
  constructor(private readonly _eventEmitter: EventEmitter2) {}

  public async publish(event: AbstractEvent<any>) {
    //console.log('publishing', event);
    this._eventEmitter.emit(event.name, event);
  }
}

export type TAbstractPublisher<SCHEMA> = {
  eventEmitter: EventEmitter2;
  eventName: EVENT_NAME;
  Schema: ClassConstructor<SCHEMA>;
};
