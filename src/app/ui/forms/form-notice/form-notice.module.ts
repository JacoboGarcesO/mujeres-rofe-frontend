import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNoticeComponent } from './form-notice.component';
import { SubFormFileModule } from '../sub-form-file/sub-form-file.module';
import { ButtonModule } from '../../elements/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { SubFormTextareaModule } from '../sub-form-textarea/sub-form-textarea.module';
import { FormLinksComponent } from './form-links/form-links.component';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { FormLinkComponent } from './form-link/form-link.component';
import { TextModule } from '../../elements/text/text.module';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';

@NgModule({
  declarations: [
    FormNoticeComponent,
    FormLinksComponent,
    FormLinkComponent,
  ],
  imports: [
    CommonModule,
    SubFormInputModule,
    ReactiveFormsModule,
    ButtonModule,
    SubFormFileModule,
    TextModule,
    SubFormTextareaModule,
    ButtonIconModule,
    SubFormSelectModule,
  ],
  exports: [
    FormNoticeComponent,
  ],
})
export class FormNoticeModule { }
