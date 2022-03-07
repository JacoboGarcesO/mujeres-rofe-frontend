import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNoticeFilterComponent } from './form-notice-filter.component';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormNoticeFilterComponent,
  ],
  imports: [
    CommonModule,
    SubFormSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormNoticeFilterComponent,
  ],
})
export class FormNoticeFilterModule { }
