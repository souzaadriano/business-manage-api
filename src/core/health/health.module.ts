import { LoggerModule } from '@/modules/logger/logger.module';
import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthUseCase } from './health.use-case';

@Module({
  imports: [LoggerModule],
  controllers: [HealthController],
  providers: [HealthUseCase],
})
export class HealthModule {}
