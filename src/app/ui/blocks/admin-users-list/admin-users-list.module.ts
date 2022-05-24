import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersListComponent } from './admin-users-list.component';
import { TableModule } from '../table/table.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { ImageModule } from '../../elements/image/image.module';
import { ModalModule } from '../../elements/modal/modal.module';
import { FormUserModule } from '../../forms/form-user/form-user.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { PaginationModule } from '../pagination/pagination.module';
import { FormUsersSearchModule } from '../../forms/form-users-search/form-users-search.module';

@NgModule({
  declarations: [
    AdminUsersListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TextModule,
    ImageModule,
    ModalModule,
    FormUserModule,
    ButtonIconModule,
    PaginationModule,
    FormUsersSearchModule,
  ],
  exports: [
    AdminUsersListComponent,
  ],
})
export class AdminUsersListModule { }
