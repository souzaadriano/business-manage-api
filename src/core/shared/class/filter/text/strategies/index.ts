import { TextContainshStrategy } from './text-contains.strategy';
import { TextEndsWithStrategy } from './text-ends-with.strategy';
import { ITextFilterStrategy, TEXT_FILTER_STRATEGY } from './text-filter.strategy.contract';
import { TextPerfectStrategy } from './text-perfect.strategy';
import { TextStartsWithStrategy } from './text-starts-with.strategy';

const textContainshStrategy = new TextContainshStrategy();
const textEndsWithStrategy = new TextEndsWithStrategy();
const textPerfectStrategy = new TextPerfectStrategy();
const textStartsWithStrategy = new TextStartsWithStrategy();

export const mappedStrategies = new Map<TEXT_FILTER_STRATEGY, ITextFilterStrategy>([
  [textContainshStrategy.strategy, textContainshStrategy],
  [textEndsWithStrategy.strategy, textEndsWithStrategy],
  [textPerfectStrategy.strategy, textPerfectStrategy],
  [textStartsWithStrategy.strategy, textStartsWithStrategy],
]);
