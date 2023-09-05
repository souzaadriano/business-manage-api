import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventPublisher } from './adapters/event-publisher/event-publisher.adapter';

@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [EventPublisher],
  exports: [EventPublisher],
})
export class EventModule {}
