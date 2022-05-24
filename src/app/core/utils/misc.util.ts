export class MiscUtil {
  static uuid(): string {
    return Math.random().toString(36).substr(2, 8);
  }

  static isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
