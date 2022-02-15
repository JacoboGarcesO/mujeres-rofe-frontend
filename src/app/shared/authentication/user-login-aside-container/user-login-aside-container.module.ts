import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginAsideContainerComponent } from './user-login-aside-container.component';
import { LoginAsideModule } from 'src/app/ui/elements/login-aside/login-aside.module';

@NgModule({
  declarations: [
    UserLoginAsideContainerComponent,
  ],
  imports: [
    CommonModule,
    LoginAsideModule,
  ],
  exports: [
    UserLoginAsideContainerComponent,
  ],
})
export class UserLoginAsideContainerModule { }
