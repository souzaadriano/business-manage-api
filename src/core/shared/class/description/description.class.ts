import { StringUtils } from '@/utils/string.util';

export class Description {
  constructor(readonly value: string) {
    if (value.length <= 256) throw new Error('');
  }

  get capitalized() {
    return StringUtils.capitalize(this.value, 'first');
  }
}
