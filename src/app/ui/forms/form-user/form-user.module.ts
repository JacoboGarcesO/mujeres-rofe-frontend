import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user.component';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../elements/button/button.module';
import { SubFormLocationModule } from '../sub-form-location/sub-form-location.module';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';
import { SubFormFileModule } from '../sub-form-file/sub-form-file.module';
import { SubFormTextareaModule } from '../sub-form-textarea/sub-form-textarea.module';
import { SubFormMultiSelectModule } from '../sub-form-multi-select/sub-form-multi-select.module';
import { SubFormCheckboxModule } from '../sub-form-checkbox/sub-form-checkbox.module';

@NgModule({
  declarations: [
    FormUserComponent,
  ],
  imports: [
    CommonModule,
    SubFormInputModule,
    ReactiveFormsModule,
    ButtonModule,
    SubFormLocationModule,
    SubFormSelectModule,
    SubFormFileModule,
    SubFormTextareaModule,
    SubFormMultiSelectModule,
    SubFormCheckboxModule,
  ],
  exports: [
    FormUserComponent,
  ],
})
export class FormUserModule { }
