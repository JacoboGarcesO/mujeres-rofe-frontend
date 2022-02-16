import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { LoaderModule } from '../../elements/loader/loader.module';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    LoaderModule,
  ],
  exports: [
    TableComponent,
  ],
})
export class TableModule { }
