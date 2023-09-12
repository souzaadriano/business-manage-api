import { UserSession } from '../../entities/user-session.entity';

export interface IUseCase<INPUT, OUTPUT> {
  readonly context: string;
  execute(input: TUseCaseInput<INPUT>): Promise<OUTPUT>;
}

export type TUseCaseInput<T> = T & {
  session: UserSession;
  pid: string;
};
