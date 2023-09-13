import { Module } from '@nestjs/common';
import { EventModule } from '../event/event.module';
import { LoggerModule } from '../logger/logger.module';
import { UsersDAO } from './dao';
import { DatabaseConnectionEngine } from './database-connection.engine';

@Module({
  imports: [EventModule, LoggerModule],
  providers: [DatabaseConnectionEngine, UsersDAO],
  exports: [UsersDAO],
  controllers: [],
})
export class DatabaseModule {}
