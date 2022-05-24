import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHighlightedCitiesListComponent } from './admin-highlighted-cities-list.component';
import { ModalModule } from '../../elements/modal/modal.module';
import { TableModule } from '../table/table.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { ImageModule } from '../../elements/image/image.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { FormHighlightedCitiesModule } from '../../forms/form-highlighted-cities/form-highlighted-cities.module';

@NgModule({
  declarations: [
    AdminHighlightedCitiesListComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    TableModule,
    ButtonIconModule,
    ImageModule,
    ButtonModule,
    TextModule,
    FormHighlightedCitiesModule,
  ],
  exports: [
    AdminHighlightedCitiesListComponent,
  ],
})
export class AdminHighlightedCitiesListModule { }
