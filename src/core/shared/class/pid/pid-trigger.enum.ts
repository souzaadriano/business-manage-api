import { EnumUtils } from '@/utils/enum';

export enum PID_TRIGGER {
  USER = 'USER',
  APPLICATION = 'APPLICATION',
  JOB = 'JOB',
  EXTERNAL = 'EXTERNAL',
}

export const pidTriggerHelper = EnumUtils.createHelper('PID_TRIGGER', PID_TRIGGER);
