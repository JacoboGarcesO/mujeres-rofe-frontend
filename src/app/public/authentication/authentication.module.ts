import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UserLoginFormContainerModule } from 'src/app/shared/shell/user-login-form-container/user-login-container-form.module';
import { UserLoginAsideContainerModule } from 'src/app/shared/shell/user-login-aside-container/user-login-aside-container.module';
import { LayoutLoginModule } from 'src/app/ui/layouts/layout-login/layout-login.module';

@NgModule({
  declarations: [],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    UserLoginFormContainerModule,
    UserLoginAsideContainerModule,
    LayoutLoginModule,
  ],
})
export class AuthenticationModule { }
