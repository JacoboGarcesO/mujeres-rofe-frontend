import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRequestListComponent } from './admin-request-list.component';
import { TableModule } from '../table/table.module';
import { TextModule } from '../../elements/text/text.module';
import { ButtonModule } from '../../elements/button/button.module';
import { ModalModule } from '../../elements/modal/modal.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { RequestsListModule } from '../requests-list/requests-list.module';

@NgModule({
  declarations: [
    AdminRequestListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TextModule,
    ButtonModule,
    ModalModule,
    ButtonIconModule,
    RequestsListModule,
  ],
  exports: [
    AdminRequestListComponent,
  ],
})
export class AdminRequestListModule { }
