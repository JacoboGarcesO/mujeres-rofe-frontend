export class MessageUtil {
  static trasnformToMessage(message: string): string {
    if (message === 'User not found') { return 'El correo que ingresaste no existe.'; }
    if (message === 'User credentials are incorrect') { return 'La contraseña que ingresaste es incorrecta.'; }
    if (message === 'Authentication was completed') { return 'Inicio de sesión exitoso.'; }

    return '';
  }
}
