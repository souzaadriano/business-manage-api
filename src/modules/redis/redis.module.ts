import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { RedisService } from './adapters/redis-service/redis-service.adapter';
import { RedisConnectionEngine } from './redis-connection.engine';

@Module({
  imports: [LoggerModule],
  providers: [RedisConnectionEngine, RedisService],
  exports: [RedisService],
})
export class RedisModule {}
