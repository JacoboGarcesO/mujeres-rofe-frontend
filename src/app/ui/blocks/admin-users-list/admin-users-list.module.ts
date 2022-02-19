import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersListComponent } from './admin-users-list.component';
import { TableModule } from '../table/table.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { ImageModule } from '../../elements/image/image.module';
import { ModalModule } from '../../elements/modal/modal.module';
import { RegisterContainerModule } from '../../../shared/authentication/register-container/register-container.module';

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
    RegisterContainerModule,
  ],
  exports: [
    AdminUsersListComponent,
  ],
})
export class AdminUsersListModule { }
