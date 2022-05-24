import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHighlightedCitiesComponent } from './form-highlighted-cities.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';
import { ButtonModule } from '../../elements/button/button.module';

@NgModule({
  declarations: [
    FormHighlightedCitiesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    SubFormSelectModule,
    ButtonModule,
  ],
  exports: [
    FormHighlightedCitiesComponent,
  ],
})
export class FormHighlightedCitiesModule { }
