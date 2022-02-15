import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserLoginAsideContainerModule } from '../shared/authentication/user-login-aside-container/user-login-aside-container.module';
import { UserLoginFormContainerModule } from '../shared/authentication/user-login-form-container/user-login-container-form.module';
import { LayoutLoginModule } from '../ui/layouts/layout-login/layout-login.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
})
export class PublicModule { }
