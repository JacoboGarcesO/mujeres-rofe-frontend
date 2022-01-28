import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginContainerComponent } from './user-login-container.component';
import { FormUserLoginModule } from 'src/app/ui/forms/form-user-login/form-user-login.module';

@NgModule({
  declarations: [
    UserLoginContainerComponent,
  ],
  imports: [
    CommonModule,
    FormUserLoginModule,
  ],
  exports: [
    UserLoginContainerComponent,
  ],
})
export class UserLoginContainerModule { }
