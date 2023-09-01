import { Module } from '@nestjs/common';
import { RestExceptionHandler } from './exception-handler/rest-exception-handler.adapter';
import { RestRequestHandler } from './request-handler/request-handler.adapter';

@Module({
  providers: [RestRequestHandler, RestExceptionHandler],
  exports: [RestRequestHandler, RestExceptionHandler],
})
export class RestModule {}
