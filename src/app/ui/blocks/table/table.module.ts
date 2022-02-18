import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { LoaderModule } from '../../elements/loader/loader.module';
import { TextModule } from '../../elements/text/text.module';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    LoaderModule,
    TextModule,
  ],
  exports: [
    TableComponent,
  ],
})
export class TableModule { }
