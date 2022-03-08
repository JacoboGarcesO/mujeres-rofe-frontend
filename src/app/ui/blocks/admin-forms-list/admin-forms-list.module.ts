import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFormsListComponent } from './admin-forms-list.component';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { ModalModule } from '../../elements/modal/modal.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { TableModule } from '../table/table.module';
import { FormFormsRequestsModule } from '../../forms/form-forms-requests/form-forms-requests.module';

@NgModule({
  declarations: [
    AdminFormsListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TextModule,
    ButtonModule,
    FormFormsRequestsModule,
    ModalModule,
    ButtonIconModule,
  ],
  exports: [
    AdminFormsListComponent,
  ],
})
export class AdminFormsListModule { }
