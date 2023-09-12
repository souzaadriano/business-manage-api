import { LoggerService } from '@/modules/logger/adapters/logger.adapter';
import { Injectable } from '@nestjs/common';
import { DateTime } from '../shared/class/date-time/date-time.class';
import { IUseCase, TUseCaseInput } from '../shared/contracts/use-case/use-case.contract';

@Injectable()
export class HealthUseCase implements IUseCase<void, THealthCheck> {
  readonly context = 'Health-Check';
  private readonly _startedAt = DateTime.now();

  constructor(private readonly _logger: LoggerService) {}

  async execute(input: TUseCaseInput<void>): Promise<THealthCheck> {
    const { pid } = input;
    const log = this._logger.get(pid);

    const issuedAt = DateTime.now();
    const since = issuedAt.timestamp() - this._startedAt.timestamp();

    log.set('startedAt', this._startedAt.format());
    log.set('since', since);

    return {
      issuedAt: issuedAt.format(),
      timestamp: issuedAt.timestamp(),
      startedAt: this._startedAt.format(),
    };
  }
}

export type THealthCheck = {
  issuedAt: string;
  timestamp: number;
  startedAt: string;
};
