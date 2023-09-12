import { Log } from '@/core/shared/class/log/log.class';

export interface ILogAppendStrategy<INPUT> {
  extract(log: Log, input: INPUT): void;
}
