import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNoticeComponent } from './form-notice.component';
import { SubFormFileModule } from '../sub-form-file/sub-form-file.module';
import { ButtonModule } from '../../elements/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { SubFormTextareaModule } from '../sub-form-textarea/sub-form-textarea.module';

@NgModule({
  declarations: [
    FormNoticeComponent,
  ],
  imports: [
    CommonModule,
    SubFormInputModule,
    ReactiveFormsModule,
    ButtonModule,
    SubFormFileModule,
    SubFormTextareaModule,
  ],
  exports: [
    FormNoticeComponent,
  ],
})
export class FormNoticeModule { }
