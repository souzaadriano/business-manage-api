import { EventPublisher } from '@/modules/event/adapters/event-publisher/event-publisher.adapter';
import { Injectable } from '@nestjs/common';
import { HealthEvent } from './health.event';

@Injectable()
export class HealthService {
  constructor(private readonly publisher: EventPublisher) {}

  async emitHealth() {
    const event = new HealthEvent({});
    //console.log(event);
    await this.publisher.publish(event);
  }
}
