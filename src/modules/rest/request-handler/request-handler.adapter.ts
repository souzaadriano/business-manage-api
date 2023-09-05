import { IUseCase } from '@/core/shared/contracts/use-case/use-case.contract';
import { HttpStatus, Injectable } from '@nestjs/common';
import { RestResponseDTO } from '../dto/rest-response.dto';
import { RestExceptionHandler } from '../exception-handler/rest-exception-handler.adapter';
import { IRestRequestHandler, TSession } from './request-handler.contract';

@Injectable()
export class RestRequestHandler implements IRestRequestHandler {
  constructor(private readonly _exceptionHandler: RestExceptionHandler) {}

  async handle<INPUT, OUTPUT>(
    useCase: IUseCase<INPUT, OUTPUT>,
    input: INPUT,
    session?: TSession,
  ): Promise<RestResponseDTO> {
    try {
      const output: any = await useCase.execute(this._setSessionToInput(input, session));
      return new RestResponseDTO({ status: HttpStatus.OK, metadata: {}, output });
    } catch (error) {
      return this._exceptionHandler.handle(error);
    }
  }

  private _setSessionToInput<INPUT>(input: INPUT, session?: TSession): INPUT {
    input['session'] = session;
    return input;
  }
}
