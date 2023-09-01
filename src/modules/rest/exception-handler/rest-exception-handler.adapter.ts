import { IExceptionHandler } from '@/core/shared/exception/exception-handler.contract';
import { AbstractException } from '@/core/shared/exception/exception.abstract';
import { TJsonDocument } from '@/core/shared/types/json-document.type';
import { HttpStatus, Injectable } from '@nestjs/common';
import { RestResponseDTO } from '../dto/rest-response.dto';
import { ExceptionToStatusCodeMapper } from './exception-to-status-code.mapper';

@Injectable()
export class RestExceptionHandler implements IExceptionHandler<RestResponseDTO> {
  handle(error: unknown): RestResponseDTO {
    const exception = AbstractException.normalize(error);
    const status = ExceptionToStatusCodeMapper.getStatus(exception.code);
    const output = this._getOutput(exception);
    const metadata = this._getMetadata(exception);
    return new RestResponseDTO({ metadata, output, status });
  }

  private _getOutput(exception: AbstractException) {
    return {
      message: exception.message,
      code: exception.code,
    };
  }

  private _getMetadata(exception: AbstractException) {
    return { contract: exception.getDetail('contract') ?? 'empty' };
  }
}

export type TExceptionResponse = {
  status: HttpStatus;
  output: TJsonDocument;
};
