import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesContentContainerComponent } from './notices-content-container.component';
import { NoticesContentModule } from '../../../ui/blocks/notices-content/notices-content.module';


@NgModule({
  declarations: [
    NoticesContentContainerComponent,
  ],
  imports: [
    CommonModule,
    NoticesContentModule,
  ],
  exports: [
    NoticesContentContainerComponent,
  ],
})
export class NoticesContentContainerModule { }
