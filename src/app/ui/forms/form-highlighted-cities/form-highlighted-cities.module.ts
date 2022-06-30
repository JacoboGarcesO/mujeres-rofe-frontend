import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHighlightedCitiesComponent } from './form-highlighted-cities.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../elements/button/button.module';
import { SubFormLocationModule } from '../sub-form-location/sub-form-location.module';

@NgModule({
  declarations: [
    FormHighlightedCitiesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    SubFormLocationModule,
    ButtonModule,
  ],
  exports: [
    FormHighlightedCitiesComponent,
  ],
})
export class FormHighlightedCitiesModule { }
