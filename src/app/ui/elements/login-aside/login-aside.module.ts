import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAsideComponent } from './login-aside.component';

@NgModule({
  declarations: [
    LoginAsideComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginAsideComponent,
  ],
})
export class LoginAsideModule { }
