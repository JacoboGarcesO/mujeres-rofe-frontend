import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFormsRequestsComponent } from './form-forms-requests.component';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { ButtonModule } from '../../elements/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { TextModule } from '../../elements/text/text.module';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';
import { FormOptionsComponent } from './form-options/form-options.component';
import { FormOptionComponent } from './form-option/form-option.component';
import { SubFormTextareaModule } from '../sub-form-textarea/sub-form-textarea.module';

@NgModule({
  declarations: [
    FormFormsRequestsComponent,
    FormFieldsComponent,
    FormFieldComponent,
    FormOptionsComponent,
    FormOptionComponent,
  ],
  imports: [
    CommonModule,
    SubFormInputModule,
    ButtonModule,
    TextModule,
    SubFormSelectModule,
    ButtonIconModule,
    SubFormTextareaModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormFormsRequestsComponent,
  ],
})
export class FormFormsRequestsModule { }
