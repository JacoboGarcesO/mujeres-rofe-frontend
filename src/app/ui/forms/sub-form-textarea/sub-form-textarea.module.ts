import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormTextareaComponent } from './sub-form-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../../elements/text/text.module';


@NgModule({
  declarations: [
    SubFormTextareaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextModule,
  ],
  exports: [
    SubFormTextareaComponent,
  ],
})
export class SubFormTextareaModule { }
