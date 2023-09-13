import { Module } from '@nestjs/common';
import { RedisService } from './adapters/redis-service.adapter';
import { RedisConnectionEngine } from './redis-connection.engine';

@Module({
  providers: [RedisConnectionEngine, RedisService],
  exports: [RedisService],
})
export class RedisModule {}
