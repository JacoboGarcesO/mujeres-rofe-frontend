import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormInputComponent } from './sub-form-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubFormInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    SubFormInputComponent,
  ],
})
export class SubFormInputModule { }
