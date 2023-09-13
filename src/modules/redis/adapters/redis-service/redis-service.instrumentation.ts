import { TJsonValue } from '@/core/shared/types/json-document.type';
import { LoggerService } from '@/modules/logger/adapters/logger.adapter';
import { AbstractInstrumentation } from '@/modules/logger/contracts/instrumentation.abstract';
import { TTL } from '../../class/ttl/ttl.class';
import { REDIS_OPERATION } from '../../redis-operation.enum';

export class RedisInstrumentation extends AbstractInstrumentation {
  constructor(logger: LoggerService) {
    super('redis', logger);
  }

  setOperation(operation: REDIS_OPERATION) {
    this._log.set('operation', operation);
  }

  setParameters(key: string, value?: TJsonValue, ttl?: TTL) {
    this._log.set('parameters', { key, value, ttl: ttl.value });
  }
}
