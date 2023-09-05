import { DatabaseModule } from '@/modules/database/database.module';
import { EventModule } from '@/modules/event/event.module';
import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthListner } from './health.listner';
import { HealthService } from './health.service';

@Module({
  imports: [EventModule, DatabaseModule],
  controllers: [HealthController],
  providers: [HealthService, HealthListner],
})
export class HealthModule {}
