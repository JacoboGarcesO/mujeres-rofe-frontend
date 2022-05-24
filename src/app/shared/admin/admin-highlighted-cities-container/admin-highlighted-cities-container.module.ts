import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHighlightedCitiesContainerComponent } from './admin-highlighted-cities-container.component';
import { AdminHighlightedCitiesListModule } from 'src/app/ui/blocks/admin-highlighted-cities-list/admin-highlighted-cities-list.module';

@NgModule({
  declarations: [
    AdminHighlightedCitiesContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminHighlightedCitiesListModule,
  ],
  exports: [
    AdminHighlightedCitiesContainerComponent,
  ],
})
export class AdminHighlightedCitiesContainerModule { }
