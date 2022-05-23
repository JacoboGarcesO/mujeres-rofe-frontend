import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUsersFilterComponent } from './form-users-filter.component';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormUsersFilterComponent,
  ],
  imports: [
    CommonModule,
    SubFormSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormUsersFilterComponent,
  ],
})
export class FormUsersFilterModule { }
