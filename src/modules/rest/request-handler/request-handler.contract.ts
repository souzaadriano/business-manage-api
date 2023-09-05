import { IUseCase } from '@/core/shared/contracts/use-case/use-case.contract';
import { UserSession } from '@/core/shared/entities/user-session.entity';
import { RestResponseDTO } from '../dto/rest-response.dto';

export type TSession = UserSession;

export interface IRestRequestHandler {
  handle<INPUT, OUTPUT>(useCase: IUseCase<INPUT, OUTPUT>, input: INPUT, session?: TSession): Promise<RestResponseDTO>;
}
