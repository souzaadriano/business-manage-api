import { TJsonDocument } from '@/core/shared/types/json-document.type';
import { LoggerService } from '@/modules/logger/adapters/logger.adapter';
import { Injectable } from '@nestjs/common';
import { TTL } from '../../class/ttl/ttl.class';
import { ParseObjectException } from '../../exceptions/parse-object-exception';
import { RedisConnectionEngine } from '../../redis-connection.engine';
import { REDIS_OPERATION } from '../../redis-operation.enum';
import { IRedisService } from './redis-service.contract';
import { RedisInstrumentation } from './redis-service.instrumentation';

@Injectable()
export class RedisService implements IRedisService {
  constructor(private readonly _engine: RedisConnectionEngine, private readonly _logger: LoggerService) {}

  async getObject<T extends {}>(key: string): Promise<T | undefined> {
    const instrumentation = new RedisInstrumentation(this._logger);
    instrumentation.setOperation(REDIS_OPERATION.GET_OBJECT);
    instrumentation.setParameters(key);
    const data = await this._engine.connection.get(key);

    try {
      instrumentation.emit();
      return data ? JSON.parse(data) : undefined;
    } catch (error) {
      const exception = new ParseObjectException(key, data);
      instrumentation.setException(exception);
      throw exception;
    }
  }

  async setObject(key: string, value: TJsonDocument, ttl: TTL): Promise<void> {
    const instrumentation = new RedisInstrumentation(this._logger);
    instrumentation.setOperation(REDIS_OPERATION.SET_OBJECT);
    instrumentation.setParameters(key, value, ttl);

    try {
      await this._engine.connection.set(key, JSON.stringify(value), 'PX', ttl.value);
      instrumentation.emit();
    } catch (error) {
      instrumentation.setException(error);
      throw error;
    }
  }

  async get(key: string): Promise<string | undefined> {
    const instrumentation = new RedisInstrumentation(this._logger);
    instrumentation.setOperation(REDIS_OPERATION.GET);
    instrumentation.setParameters(key);

    try {
      await this._engine.connection.get(key);
      instrumentation.emit();
      return key ? key : undefined;
    } catch (error) {
      instrumentation.setException(error);
      throw error;
    }
  }

  async set(key: string, value: string, ttl: TTL): Promise<void> {
    const instrumentation = new RedisInstrumentation(this._logger);
    instrumentation.setOperation(REDIS_OPERATION.SET);
    instrumentation.setParameters(key, value, ttl);

    try {
      await this._engine.connection.set(key, value, 'PX', ttl.value);
      instrumentation.emit();
    } catch (error) {
      instrumentation.setException(error);
      throw error;
    }
  }

  async touch(key: string, ttl: TTL): Promise<void> {
    const instrumentation = new RedisInstrumentation(this._logger);
    instrumentation.setOperation(REDIS_OPERATION.GET_OBJECT);
    instrumentation.setParameters(key, undefined, ttl);

    try {
      await this._engine.connection.pexpire(key, ttl.value);
      instrumentation.emit();
    } catch (error) {
      instrumentation.setException(error);
      throw error;
    }
  }
}
