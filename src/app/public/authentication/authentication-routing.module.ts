import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterContainerComponent } from 'src/app/shared/shell/register-container/register-container.component';
import { UserLoginAsideContainerComponent } from 'src/app/shared/shell/user-login-aside-container/user-login-aside-container.component';
import { UserLoginFormContainerComponent } from 'src/app/shared/shell/user-login-form-container/user-login-container-form.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
