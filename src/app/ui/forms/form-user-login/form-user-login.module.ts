import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserLoginComponent } from './form-user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { ButtonModule } from '../../elements/button/button.module';

@NgModule({
  declarations: [
    FormUserLoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubFormInputModule,
    ButtonModule,
  ],
  exports: [
    FormUserLoginComponent,
  ],
})
export class FormUserLoginModule { }
