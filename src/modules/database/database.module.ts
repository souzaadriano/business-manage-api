import { Module } from '@nestjs/common';
import { EventModule } from '../event/event.module';
import { DatabaseConnectionEngine } from './database-connection.engine';
import { DatabaseEventListner } from './events/database-events.listner';

@Module({
  imports: [EventModule],
  providers: [DatabaseEventListner, DatabaseConnectionEngine],
  exports: [DatabaseConnectionEngine],
  controllers: [],
})
export class DatabaseModule {}
