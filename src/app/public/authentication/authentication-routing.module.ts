import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordContainerComponent } from 'src/app/shared/authentication/forgot-password-container/forgot-password-container.component';
import { RegisterContainerComponent } from 'src/app/shared/authentication/register-container/register-container.component';
import { UserLoginAsideContainerComponent } from 'src/app/shared/authentication/user-login-aside-container/user-login-aside-container.component';
import { UserLoginFormContainerComponent } from 'src/app/shared/authentication/user-login-form-container/user-login-container-form.component';
import { RequestNotificationsContainerComponent } from 'src/app/shared/static/request-notifications-container/request-notifications-container.component';
import { LayoutLoginComponent } from 'src/app/ui/layouts/layout-login/layout-login.component';
import { LayoutRegisterComponent } from 'src/app/ui/layouts/layout-register/layout-register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutLoginComponent,
    children: [
      { path: '', component: UserLoginFormContainerComponent, outlet: 'form' },
      { path: '', component: UserLoginAsideContainerComponent },
    ],
  },
  {
    path: 'register',
    component: LayoutRegisterComponent,
    children: [
      { path: '', component: RequestNotificationsContainerComponent, outlet: 'notifications' },
      { path: '', component: RegisterContainerComponent },
    ],
  },
  {
    path: 'forgot-password',
    component: LayoutRegisterComponent,
    children: [
      { path: '', component: RequestNotificationsContainerComponent, outlet: 'notifications' },
      { path: '', component: ForgotPasswordContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
