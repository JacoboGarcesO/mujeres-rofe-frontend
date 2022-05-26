import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormCheckboxComponent } from './sub-form-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../../elements/text/text.module';

@NgModule({
  declarations: [
    SubFormCheckboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextModule,
  ],
  exports: [
    SubFormCheckboxComponent,
  ],
})
export class SubFormCheckboxModule { }
