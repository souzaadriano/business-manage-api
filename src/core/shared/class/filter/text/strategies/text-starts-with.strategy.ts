import { ITextFilterStrategy, TEXT_FILTER_STRATEGY } from './text-filter.strategy.contract';

export class TextStartsWithStrategy implements ITextFilterStrategy {
  strategy = TEXT_FILTER_STRATEGY.STARTS_WITH;
  handle(value: string): string {
    return `${value}%%`;
  }
}
