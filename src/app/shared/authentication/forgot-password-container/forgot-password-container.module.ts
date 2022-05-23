import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordContainerComponent } from './forgot-password-container.component';
import { ForgotPasswordModule } from 'src/app/ui/blocks/forgot-password/forgot-password.module';

@NgModule({
  declarations: [
    ForgotPasswordContainerComponent,
  ],
  imports: [
    CommonModule,
    ForgotPasswordModule,
  ],
  exports: [
    ForgotPasswordContainerComponent,
  ],
})
export class ForgotPasswordContainerModule { }
