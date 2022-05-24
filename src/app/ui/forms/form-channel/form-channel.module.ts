import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormChannelComponent } from './form-channel.component';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../elements/button/button.module';
import { SubFormFileModule } from '../sub-form-file/sub-form-file.module';
import { TextModule } from '../../elements/text/text.module';
import { SubFormTextareaModule } from '../sub-form-textarea/sub-form-textarea.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';


@NgModule({
  declarations: [
    FormChannelComponent,
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
  ],
  exports: [
    FormChannelComponent,
  ],
})
export class FormChannelModule { }
