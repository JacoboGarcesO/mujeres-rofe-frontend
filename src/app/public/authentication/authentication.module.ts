import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UserLoginFormContainerModule } from 'src/app/shared/authentication/user-login-form-container/user-login-container-form.module';
import { UserLoginAsideContainerModule } from 'src/app/shared/authentication/user-login-aside-container/user-login-aside-container.module';
import { LayoutRegisterModule } from 'src/app/ui/layouts/layout-register/layout-register.module';
import { RequestNotificationsContainerModule } from 'src/app/shared/static/request-notifications-container/request-notifications-container.module';
import { RegisterContainerModule } from 'src/app/shared/authentication/register-container/register-container.module';
import { ForgotPasswordContainerModule } from 'src/app/shared/authentication/forgot-password-container/forgot-password-container.module';
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
    ForgotPasswordContainerModule,
  ],
})
export class AuthenticationModule { }
