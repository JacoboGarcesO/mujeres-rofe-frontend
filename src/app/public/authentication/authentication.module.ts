import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UserLoginFormContainerModule } from 'src/app/shared/shell/user-login-form-container/user-login-container-form.module';
import { UserLoginAsideContainerModule } from 'src/app/shared/shell/user-login-aside-container/user-login-aside-container.module';
import { LayoutRegisterModule } from 'src/app/ui/layouts/layout-register/layout-register.module';
import { RequestNotificationsContainerModule } from 'src/app/shared/static/request-notifications-container/request-notifications-container.module';
import { RegisterContainerModule } from 'src/app/shared/shell/register-container/register-container.module';

@NgModule({
  declarations: [],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    UserLoginFormContainerModule,
    UserLoginAsideContainerModule,
    LayoutRegisterModule,
    RequestNotificationsContainerModule,
    RegisterContainerModule,
  ],
})
export class AuthenticationModule { }
