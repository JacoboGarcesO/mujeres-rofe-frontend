import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { TextModule } from '../../elements/text/text.module';


@NgModule({
  declarations: [
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
  ],
  exports: [
    PaginationComponent,
  ],
})
export class PaginationModule { }
