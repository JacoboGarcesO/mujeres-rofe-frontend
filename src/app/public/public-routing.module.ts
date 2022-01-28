import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginContainerComponent } from '../shared/shell/user-login-container/user-login-container.component';
import { PublicGuard } from './public.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [PublicGuard],
    component: UserLoginContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
