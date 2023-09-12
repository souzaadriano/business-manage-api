import { DateTime } from '@/core/shared/class/date-time/date-time.class';
import { Log } from '@/core/shared/class/log/log.class';
import { Request } from 'express';
import { ILogAppendStrategy } from './log-extractor.contract';

export class RequestLogAppendStrategy implements ILogAppendStrategy<Request> {
  extract(log: Log, input: Request): void {
    const method = input.method;
    const url = input.url;
    const params = input.params;
    const query = input.query;
    const authorization = input.headers.authorization ? true : false;
    const issuedAt = DateTime.now();

    log.set('request', {
      method,
      url,
      params,
      query,
      authorization,
      issuedAt: issuedAt.format(),
      timestamp: issuedAt.timestamp(),
    });
  }
}
