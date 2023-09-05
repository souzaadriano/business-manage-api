import { AbstractDateFormat } from './date-format-strategy.abstract';
import { DefaultDateFormatStrategy } from './default.strategy';
import { PtBrDateFormatStrategy } from './pt-br.strategy';
import { TimestampInSecondsStrategy } from './timestamp-in-seconds.strategy';

export const defaultDateFormatStrategy = new DefaultDateFormatStrategy();
const ptBrDateFormatStrategy = new PtBrDateFormatStrategy();
const timestampInSecondsStrategy = new TimestampInSecondsStrategy();

export const mappedDateFormatters = new Map<string, AbstractDateFormat>([
  [defaultDateFormatStrategy.type, defaultDateFormatStrategy],
  [ptBrDateFormatStrategy.type, ptBrDateFormatStrategy],
  [timestampInSecondsStrategy.type, timestampInSecondsStrategy],
]);

export type TMappedDateFormatters = Map<string, AbstractDateFormat>;
