import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersListContainerComponent } from './admin-users-list-container.component';
import { AdminUsersListModule } from 'src/app/ui/blocks/admin-users-list/admin-users-list.module';

@NgModule({
  declarations: [
    AdminUsersListContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminUsersListModule,
  ],
  exports: [
    AdminUsersListContainerComponent,
  ],
})
export class AdminUsersListContainerModule { }
