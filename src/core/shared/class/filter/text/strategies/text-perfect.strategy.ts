import { ITextFilterStrategy, TEXT_FILTER_STRATEGY } from './text-filter.strategy.contract';

export class TextPerfectStrategy implements ITextFilterStrategy {
  strategy = TEXT_FILTER_STRATEGY.PERFECT;
  handle(value: string): string {
    return value;
  }
}
