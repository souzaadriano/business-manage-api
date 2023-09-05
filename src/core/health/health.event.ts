import { AbstractEvent } from '@/modules/event/class/abstract-event.abstract';
import { EVENT_NAME } from '@/modules/event/types/event-names.enum';

export class HealthEvent extends AbstractEvent<{}> {
  readonly name = EVENT_NAME.HEALTH;
}
