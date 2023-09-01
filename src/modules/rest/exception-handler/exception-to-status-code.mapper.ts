import { EXCEPTION_CODE } from '@/core/shared/exception/exception-code.enum';
import { HttpStatus } from '@nestjs/common';

export abstract class ExceptionToStatusCodeMapper {
  private static _map = new Map<EXCEPTION_CODE, HttpStatus>([
    [EXCEPTION_CODE.INVALID_INPUT, HttpStatus.BAD_REQUEST],
    [EXCEPTION_CODE.UNKNOWN, HttpStatus.INTERNAL_SERVER_ERROR],
    [EXCEPTION_CODE.FORBBIDEN, HttpStatus.FORBIDDEN],
  ]);

  static getStatus(code: EXCEPTION_CODE): HttpStatus {
    return ExceptionToStatusCodeMapper._map.get(code) ?? HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
