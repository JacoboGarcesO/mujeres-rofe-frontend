import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUsersSearchComponent } from './form-users-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';

@NgModule({
  declarations: [
    FormUsersSearchComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubFormInputModule,
  ],
  exports: [
    FormUsersSearchComponent,
  ],
})
export class FormUsersSearchModule { }
