import { Log } from '@/core/shared/class/log/log.class';

export interface ILoggerService {
  get(pid: string): Log;
  add(log: Log): void;
  emit(log: string | Log): void;
  print(context: string, message: string): void;
}
