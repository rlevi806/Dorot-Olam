export class Utils {
  public static hasValue(val): boolean {
    return val !== undefined && val !== null && val !== 0 && val !== '';
  }
}
