import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mr-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent {
  @Output() forgotPassword: EventEmitter<string> = new EventEmitter();

  handleForgotPassword({ value }: { value: string }): void {
    this.forgotPassword.emit(value);
  }
}
