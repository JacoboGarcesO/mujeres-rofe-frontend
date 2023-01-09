import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormMultiSelectComponent } from './sub-form-multi-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../../elements/text/text.module';
import { DropdownModule } from '../../elements/dropdown/dropdown.module';
import { FormErrorsComponent } from '../form-errors/form-errors.component';


@NgModule({
  declarations: [
    SubFormMultiSelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    TextModule,
    FormErrorsComponent,
  ],
  exports: [
    SubFormMultiSelectComponent,
  ],
})
export class SubFormMultiSelectModule { }
