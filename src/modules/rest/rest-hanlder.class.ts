import { Log } from '@/core/shared/class/log/log.class';
import { Pid } from '@/core/shared/class/pid/pid.class';
import { IUseCase } from '@/core/shared/contracts/use-case/use-case.contract';
import { UserSession } from '@/core/shared/entities/user-session.entity';
import { EXCEPTION_DETAILS } from '@/core/shared/exception/common/exception-details.enum';
import { AbstractException } from '@/core/shared/exception/exception.abstract';
import { ExceptionNormalizer } from '@/core/shared/exception/exception.normalizer';
import { Request, Response } from 'express';
import { RequestLogAppendStrategy } from '../logger/adapters/logger-extractors/append-request.strategy';
import { ResponseLogAppendStrategy } from '../logger/adapters/logger-extractors/append-response.strategy';
import { Loggers } from '../logger/loggers';
import { RestResponseDTO } from './dto/rest-response.dto';
import { RestStatusMapper } from './rest-status.mapper';

export class RestHandler {
  private readonly _loggers = Loggers;
  private readonly _appendRequest = new RequestLogAppendStrategy();
  private readonly _appendResponse = new ResponseLogAppendStrategy();

  constructor(private readonly _request: Request, private readonly _response: Response) {}

  async handle<INPUT, OUTPUT>(useCase: IUseCase<INPUT, OUTPUT>, input: INPUT): Promise<void> {
    const pid = Pid.create(useCase.context);
    const log = Log.create(useCase.context, pid);
    this._loggers.add(log);

    try {
      this._appendRequest.extract(log, this._request);
      const output = await useCase.execute(this._upgradeInput(input, pid.value));
      this._appendResponse.extract(log, 200);
      this._response.status(200).json(output);
    } catch (error) {
      return this.handleError(error, log);
    } finally {
      this._loggers.emit(log);
    }
  }

  private _upgradeInput<INPUT>(input: INPUT, pid: string, session?: UserSession): any {
    if (!input) return { pid } as any;
    input['pid'] = pid;
    input['session'] = session;

    return input;
  }

  handleError(error: unknown, log: Log): void {
    const exception = ExceptionNormalizer.handle(error);
    const status = RestStatusMapper.getStatusByException(exception);
    const output = this._getOutput(exception);
    const metadata = this._getMetadata(exception);
    const response = new RestResponseDTO({ metadata, output, status });
    this._appendResponse.extract(log, response.status);
    log.exception(exception);
    this._response.status(response.status).json(response.output);
  }

  private _getOutput(exception: AbstractException) {
    return {
      message: exception.message,
      code: exception.code,
    };
  }

  private _getMetadata(exception: AbstractException) {
    return { reason: exception.getDetail(EXCEPTION_DETAILS.REASON) ?? 'empty' };
  }
}

export type TRestHandlerConstructor = {
  request: Request;
  response: Response;
};
