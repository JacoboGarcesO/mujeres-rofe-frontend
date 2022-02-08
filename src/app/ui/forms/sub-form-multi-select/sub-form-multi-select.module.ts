import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormMultiSelectComponent } from './sub-form-multi-select.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../../elements/text/text.module';


@NgModule({
  declarations: [
    SubFormMultiSelectComponent,
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TextModule,
  ],
  exports: [
    SubFormMultiSelectComponent,
  ],
})
export class SubFormMultiSelectModule { }
