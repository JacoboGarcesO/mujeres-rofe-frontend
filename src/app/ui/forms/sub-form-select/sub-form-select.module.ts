import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormSelectComponent } from './sub-form-select.component';
import { DropdownModule } from '../../elements/dropdown/dropdown.module';
import { TextModule } from '../../elements/text/text.module';
import { FormErrorsComponent } from '../form-errors/form-errors.component';

@NgModule({
  declarations: [
    SubFormSelectComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    TextModule,
    FormErrorsComponent,
  ],
  exports: [
    SubFormSelectComponent,
  ],
})
export class SubFormSelectModule { }
