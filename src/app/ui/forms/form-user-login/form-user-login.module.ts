import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserLoginComponent } from './form-user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { AlertModule } from '../../elements/alert/alert.module';
import { SubFormInputLoginModule } from '../sub-form-input-login/sub-form-input-login.module';
import { CardModule } from '../../elements/card/card.module';

@NgModule({
  declarations: [
    FormUserLoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubFormInputModule,
    SubFormInputLoginModule,
    ButtonModule,
    CardModule,
    TextModule,
    AlertModule,
  ],
  exports: [
    FormUserLoginComponent,
  ],
})
export class FormUserLoginModule { }
