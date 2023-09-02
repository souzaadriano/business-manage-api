import { ITextFilterStrategy, TEXT_FILTER_STRATEGY } from './text-filter.strategy.contract';

export class TextEndsWithStrategy implements ITextFilterStrategy {
  strategy = TEXT_FILTER_STRATEGY.ENDS_WITH;
  handle(value: string): string {
    return `%%${value}`;
  }
}
