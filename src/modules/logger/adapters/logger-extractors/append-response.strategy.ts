import { DateTime } from '@/core/shared/class/date-time/date-time.class';
import { Log } from '@/core/shared/class/log/log.class';
import { ILogAppendStrategy } from './log-extractor.contract';

export class ResponseLogAppendStrategy implements ILogAppendStrategy<number> {
  extract(log: Log, status: number): void {
    const endsAt = DateTime.now();
    const request = log.get<{ timestamp: number }>('request');
    const elapsedTime = request ? request.timestamp - endsAt.timestamp() : 'reqeust not found';

    log.set('response', { status, elapsedTime });
  }
}
