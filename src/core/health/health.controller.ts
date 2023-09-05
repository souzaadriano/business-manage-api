import { DatabaseConnectionEngine } from '@/modules/database/database-connection.engine';
import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('/health')
export class HealthController {
  constructor(private readonly _service: HealthService, private readonly db: DatabaseConnectionEngine) {}

  @Get()
  async healthCheck() {
    this._service.emitHealth();
    return this.db.dbUsers();
  }
}
