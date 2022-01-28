import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginAsideContainerComponent } from '../shared/shell/user-login-aside-container/user-login-aside-container.component';
import { UserLoginFormContainerComponent } from '../shared/shell/user-login-form-container/user-login-container-form.component';
import { LayoutLoginComponent } from '../ui/layouts/layout-login/layout-login.component';
import { PublicGuard } from './public.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutLoginComponent,
    canActivate: [PublicGuard],
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
export class PublicRoutingModule { }
