import { DateControll } from '../class/date-controll/date-controll.class';
import { Uuid } from '../class/uuid/uuid.class';

export interface IEntity {
  id: Uuid;
  date: DateControll;

  isDeleted(): boolean;
}
