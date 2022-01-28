export class MiscUtil {
  static uuid(): string {
    return Math.random().toString(36).substr(2, 8);
  }
}
