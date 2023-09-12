import { Module } from '@nestjs/common';
import { EventModule } from '../event/event.module';
import { LoggerModule } from '../logger/logger.module';
import { DatabaseConnectionEngine } from './database-connection.engine';

@Module({
  imports: [EventModule, LoggerModule],
  providers: [DatabaseConnectionEngine],
  exports: [DatabaseConnectionEngine],
  controllers: [],
})
export class DatabaseModule {}
