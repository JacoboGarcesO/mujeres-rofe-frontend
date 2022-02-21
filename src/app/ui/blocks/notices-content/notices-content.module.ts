import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesContentComponent } from './notices-content.component';

@NgModule({
  declarations: [
    NoticesContentComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NoticesContentComponent,
  ],
})
export class NoticesContentModule { }
