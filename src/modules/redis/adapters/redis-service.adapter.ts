import { TJsonDocument } from '@/core/shared/types/json-document.type';
import { Injectable } from '@nestjs/common';
import { TTL } from '../class/ttl/ttl.class';
import { RedisConnectionEngine } from '../redis-connection.engine';
import { IRedisService } from './redis-service.contract';

@Injectable()
export class RedisService implements IRedisService {
  constructor(private readonly _engine: RedisConnectionEngine) {}

  async getObject<T extends {}>(key: string): Promise<T | undefined> {
    const data = await this._engine.connection.get(key);
    return data ? JSON.parse(data) : undefined;
  }

  async setObject(key: string, value: TJsonDocument, ttl: TTL): Promise<void> {
    await this._engine.connection.set(key, JSON.stringify(value), 'PX', ttl.value);
  }

  async get(key: string): Promise<string | undefined> {
    await this._engine.connection.get(key);
    return key ? key : undefined;
  }

  async set(key: string, value: string, ttl: TTL): Promise<void> {
    await this._engine.connection.set(key, value, 'PX', ttl.value);
  }

  async touch(key: string, ttl: TTL): Promise<void> {
    await this._engine.connection.pexpire(key, ttl.value);
  }
}
