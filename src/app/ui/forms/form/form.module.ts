import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';

@NgModule({
  declarations: [
    FormFieldsComponent,
    FormFieldComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    SubFormInputModule,
    SubFormSelectModule,
    ButtonModule,
    TextModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormComponent,
  ],
})
export class FormModule { }
