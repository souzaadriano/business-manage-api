import { StringUtils } from '@/utils/string.util';

export class ProductName {
  constructor(readonly value: string) {}

  get capitalized() {
    return StringUtils.capitalize(this.value);
  }
}
