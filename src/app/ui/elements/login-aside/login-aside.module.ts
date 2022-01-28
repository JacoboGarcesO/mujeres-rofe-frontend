import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAsideComponent } from './login-aside.component';
import { ImageModule } from '../image/image.module';

@NgModule({
  declarations: [
    LoginAsideComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
  ],
  exports: [
    LoginAsideComponent,
  ],
})
export class LoginAsideModule { }
