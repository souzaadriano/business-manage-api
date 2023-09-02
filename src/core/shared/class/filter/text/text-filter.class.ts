import { mappedStrategies } from './strategies';
import { TEXT_FILTER_STRATEGY } from './strategies/text-filter.strategy.contract';

export class TextFilter {
  private readonly _strategies = mappedStrategies;

  constructor(readonly value: string, readonly strategy: TEXT_FILTER_STRATEGY = TEXT_FILTER_STRATEGY.CONTAINS) {}

  get filter(): string {
    const strategy = this._strategies.get(this.strategy);
    if (!strategy) return this.value;
    return strategy.handle(this.value);
  }
}
