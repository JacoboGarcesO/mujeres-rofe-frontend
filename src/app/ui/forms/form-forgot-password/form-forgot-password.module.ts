import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormForgotPasswordComponent } from './form-forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { ButtonModule } from '../../elements/button/button.module';
import { CardModule } from '../../elements/card/card.module';

@NgModule({
  declarations: [
    FormForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubFormInputModule,
    ButtonModule,
  ],
  exports: [
    FormForgotPasswordComponent,
  ],
})
export class FormForgotPasswordModule { }
