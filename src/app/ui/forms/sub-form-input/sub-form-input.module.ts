import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormInputComponent } from './sub-form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../../elements/text/text.module';

@NgModule({
  declarations: [
    SubFormInputComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    ReactiveFormsModule,
  ],
  exports: [
    SubFormInputComponent,
  ],
})
export class SubFormInputModule { }
