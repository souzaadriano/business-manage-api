import { CATEGORY_TYPE } from './category-type.enum';

export abstract class AbstractCategory<T> {
  abstract type: CATEGORY_TYPE;

  constructor(readonly value: T) {}
}
