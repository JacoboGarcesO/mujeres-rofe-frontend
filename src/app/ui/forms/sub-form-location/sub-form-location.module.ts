import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormLocationComponent } from './sub-form-location.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';


@NgModule({
  declarations: [
    SubFormLocationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubFormSelectModule,
  ],
  exports: [
    SubFormLocationComponent,
  ],
})
export class SubFormLocationModule { }
