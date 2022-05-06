import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSlideComponent } from './form-slide.component';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../elements/button/button.module';
import { SubFormFileModule } from '../sub-form-file/sub-form-file.module';

@NgModule({
  declarations: [
    FormSlideComponent,
  ],
  imports: [
    CommonModule,
    SubFormInputModule,
    ReactiveFormsModule,
    ButtonModule,
    SubFormFileModule,
  ],
  exports: [
    FormSlideComponent,
  ],
})
export class FormSlideModule { }
