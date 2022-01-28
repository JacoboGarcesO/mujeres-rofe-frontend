import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginFormContainerComponent } from './user-login-container-form.component';
import { FormUserLoginModule } from 'src/app/ui/forms/form-user-login/form-user-login.module';

@NgModule({
  declarations: [
    UserLoginFormContainerComponent,
  ],
  imports: [
    CommonModule,
    FormUserLoginModule,
  ],
  exports: [
    UserLoginFormContainerComponent,
  ],
})
export class UserLoginFormContainerModule { }
