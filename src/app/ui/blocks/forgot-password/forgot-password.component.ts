import { Component, ChangeDetectionStrategy, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ForgotPasswordComponent {
  @Output() forgotPassword: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  get text(): string {
    return '¡Ingresa el correo electrónico con el que te registraste y te enviaremos nuevamente tus credenciales al correo!';
  }

  handleToBack(): void {
    this.router.navigateByUrl('/auth/login');
  }

  handleForgotPassword({ value }: { value: string }): void {
    this.forgotPassword.emit(value);
  }
}
