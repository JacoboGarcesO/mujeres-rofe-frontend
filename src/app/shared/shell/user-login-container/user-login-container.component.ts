import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserCredentialsModel } from 'src/app/core/models/user-credentials.model';

@Component({
  selector: 'mr-user-login-container',
  templateUrl: './user-login-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginContainerComponent {
  handleLogin(formData: UserCredentialsModel) {
    console.log(formData);
  }
}
