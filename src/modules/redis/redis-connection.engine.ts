import { Injectable, OnModuleInit } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisConnectionEngine implements OnModuleInit {
  private readonly _configuration: any;
  private _client: Redis;

  async onModuleInit() {
    this._client = new Redis({
      host: this._configuration.host,
      db: 0,
      port: this._configuration.port,
      password: this._configuration.password,
      lazyConnect: true,
    });

    await this._client.connect();
  }

  get connection() {
    return this._client;
  }
}
