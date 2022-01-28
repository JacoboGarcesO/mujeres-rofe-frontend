import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserLoginContainerModule } from '../shared/shell/user-login-container/user-login-container.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    UserLoginContainerModule,
  ],
})
export class PublicModule { }
