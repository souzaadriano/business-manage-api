import { Module } from '@nestjs/common';
import { EventModule } from '../event/event.module';
import { LoggerModule } from '../logger/logger.module';
import { DaoProviders } from './dao';
import { DatabaseConnectionEngine } from './database-connection.engine';

@Module({
  imports: [EventModule, LoggerModule],
  providers: [DatabaseConnectionEngine, ...DaoProviders],
  exports: [...DaoProviders],
  controllers: [],
})
export class DatabaseModule {}
