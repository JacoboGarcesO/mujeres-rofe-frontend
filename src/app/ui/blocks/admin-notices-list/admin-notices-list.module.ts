import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNoticesListComponent } from './admin-notices-list.component';
import { TableModule } from '../table/table.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { ImageModule } from '../../elements/image/image.module';
import { ModalModule } from '../../elements/modal/modal.module';

@NgModule({
  declarations: [
    AdminNoticesListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TextModule,
    ImageModule,
    ModalModule,
  ],
  exports: [
    AdminNoticesListComponent,
  ],
})
export class AdminNoticesListModule { }
