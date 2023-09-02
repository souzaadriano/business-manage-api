export abstract class StringUtils {
  static capitalize(value: string, mode: 'complete' | 'first' = 'complete'): string {
    return mode === 'first' ? StringUtils._capitalizeFirst(value) : StringUtils._capitalizeComplete(value);
  }

  private static _capitalizeComplete(value: string) {
    const words = value.split(' ');
    return words.map(StringUtils._capitalizeFirst).join(' ');
  }

  private static _capitalizeFirst(value: string) {
    const first = value.charAt(0).toUpperCase();
    return `${first}${value.slice(1)}`;
  }
}
