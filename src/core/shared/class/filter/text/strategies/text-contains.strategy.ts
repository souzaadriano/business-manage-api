import { ITextFilterStrategy, TEXT_FILTER_STRATEGY } from './text-filter.strategy.contract';

export class TextContainshStrategy implements ITextFilterStrategy {
  strategy = TEXT_FILTER_STRATEGY.CONTAINS;
  handle(value: string): string {
    return `%%${value}%%`;
  }
}
