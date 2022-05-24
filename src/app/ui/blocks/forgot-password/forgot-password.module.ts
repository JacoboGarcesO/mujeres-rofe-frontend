import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { HomeBackgroundModule } from '../../elements/home-background/home-background.module';
import { FormForgotPasswordModule } from '../../forms/form-forgot-password/form-forgot-password.module';
import { CardModule } from '../../elements/card/card.module';
import { TextModule } from '../../elements/text/text.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    HomeBackgroundModule,
    FormForgotPasswordModule,
    CardModule,
    TextModule,
    ButtonIconModule,
  ],
  exports: [
    ForgotPasswordComponent,
  ],
})
export class ForgotPasswordModule { }
