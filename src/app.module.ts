import { Module } from '@nestjs/common';
import { HealthModule } from './core/health/health.module';
import { DatabaseModule } from './modules/database/database.module';
import { EventModule } from './modules/event/event.module';
import { RestModule } from './modules/rest/rest.module';

@Module({
  imports: [DatabaseModule, EventModule, RestModule, HealthModule],
})
export class AppModule {}
