import { EVENT_NAME } from '@/modules/event/types/event-names.enum';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ExceptionEvent } from './exception.event';

@Injectable()
export class ExceptionListner {
  @OnEvent(EVENT_NAME.EXCEPTION)
  onError(exception: ExceptionEvent) {}
}
