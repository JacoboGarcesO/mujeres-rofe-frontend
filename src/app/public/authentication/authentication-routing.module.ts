import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginAsideContainerComponent } from 'src/app/shared/shell/user-login-aside-container/user-login-aside-container.component';
import { UserLoginFormContainerComponent } from 'src/app/shared/shell/user-login-form-container/user-login-container-form.component';
import { LayoutLoginComponent } from 'src/app/ui/layouts/layout-login/layout-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutLoginComponent,
    children: [
      { path: '', component: UserLoginFormContainerComponent, outlet: 'form' },
      { path: '', component: UserLoginAsideContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
