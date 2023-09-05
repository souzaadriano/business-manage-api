import { EVENT_NAME } from '@/modules/event/types/event-names.enum';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { HealthEvent } from './health.event';

@Injectable()
export class HealthListner {
  @OnEvent(EVENT_NAME.HEALTH)
  event(event: HealthEvent) {
    console.log('HealthListner2', event);
  }
}
