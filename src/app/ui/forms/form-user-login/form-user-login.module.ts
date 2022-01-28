import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserLoginComponent } from './form-user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';

@NgModule({
  declarations: [
    FormUserLoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubFormInputModule,
  ],
  exports: [
    FormUserLoginComponent,
  ],
})
export class FormUserLoginModule { }
