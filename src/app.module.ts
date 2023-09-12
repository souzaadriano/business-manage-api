import { Module } from '@nestjs/common';

import { HealthModule } from './core/health/health.module';
import { DatabaseModule } from './modules/database/database.module';
import { EventModule } from './modules/event/event.module';
import { LoggerModule } from './modules/logger/logger.module';
import { RestModule } from './modules/rest/rest.module';

@Module({
  imports: [LoggerModule, HealthModule, DatabaseModule, EventModule, RestModule],
})
export class AppModule {}
