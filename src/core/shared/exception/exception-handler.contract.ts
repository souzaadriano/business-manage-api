import { AbstractException } from './exception.abstract';
export interface IExceptionHandler<OUTPUT> {
  handle(error: AbstractException): Promise<OUTPUT>;
}
