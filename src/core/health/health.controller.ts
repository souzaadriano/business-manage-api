import { RequestHandler } from '@/modules/rest/decorators/request-handler/request-handler.decorator';
import { RestHandler } from '@/modules/rest/rest-hanlder.class';
import { Controller, Get } from '@nestjs/common';
import { HealthUseCase } from './health.use-case';

@Controller('/health')
export class HealthController {
  constructor(private readonly _healthUseCase: HealthUseCase) {}

  @Get()
  async healthCheck(@RequestHandler() handler: RestHandler) {
    return await handler.handle(this._healthUseCase, undefined);
  }
}
