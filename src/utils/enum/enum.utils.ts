import { EnumHelper } from './enum-helper/enum-helper.class';

export abstract class EnumUtils {
  static createHelper<T>(name: string, value: T) {
    return new EnumHelper(name, value);
  }
}
