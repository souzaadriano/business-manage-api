import { TJsonDocument } from '@/core/shared/types/json-document.type';
import { TTL } from '../class/ttl/ttl.class';

export interface IRedisService {
  getObject<T extends {}>(key: string): Promise<T | undefined>;
  setObject(key: string, value: TJsonDocument, ttl: TTL): Promise<void>;
  get(key: string): Promise<string | undefined>;
  set(key: string, value: string, ttl: TTL): Promise<void>;
  touch(key: string, ttl: TTL): Promise<void>;
}
