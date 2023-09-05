import { EnumUtils } from '@/utils/enum';

export enum PID_CONTEXT {
  EVENT = 'EVENT',
  REST_REQUEST = 'REST_REQUEST',
  DATABASE_QUERY = 'DATABASE_QUERY',
  EXCEPTION = 'EXCEPTION',
}

export const pidContextHelper = EnumUtils.createHelper('PID_CONTEXT', PID_CONTEXT);
