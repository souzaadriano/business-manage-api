import { Module, OnModuleInit } from '@nestjs/common';
import { LoggerService } from './adapters/logger.adapter';
import { Loggers } from './loggers';

@Module({
  imports: [],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule implements OnModuleInit {
  onModuleInit() {
    Loggers.init();
  }
}
