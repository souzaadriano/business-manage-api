import { EVENT_NAME } from '@/modules/event/types/event-names.enum';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DatabaseQueryEvent } from './database.event';

@Injectable()
export class DatabaseEventListner {
  constructor() {
    console.log('DatabaseEventController: run');
  }

  @OnEvent(EVENT_NAME.DATABASE_QUERY)
  async onEvent(event: DatabaseQueryEvent): Promise<void> {
    console.log(event);
  }
}
