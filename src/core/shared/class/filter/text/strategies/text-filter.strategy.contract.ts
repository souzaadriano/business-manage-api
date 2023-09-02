export interface ITextFilterStrategy {
  readonly strategy: TEXT_FILTER_STRATEGY;
  handle(value: string): string;
}

export enum TEXT_FILTER_STRATEGY {
  STARTS_WITH = 'STARTS_WITH',
  ENDS_WITH = 'ENDS_WITH',
  PERFECT = 'PERFECT',
  CONTAINS = 'CONTAINS',
}
