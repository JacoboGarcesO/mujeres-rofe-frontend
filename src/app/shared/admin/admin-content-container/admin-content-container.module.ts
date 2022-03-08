import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContentContainerComponent } from './admin-content-container.component';
import { TabsModule } from '../../../ui/blocks/tabs/tabs.module';
import { AdminNoticesListContainerModule } from '../admin-notices-list-container/admin-notices-list-container.module';
import { AdminUsersListContainerModule } from '../admin-users-list-container/admin-users-list-container.module';
import { AdminFormsListContainerModule } from '../admin-forms-list-container/admin-forms-list-container.module';
import { AdminRequestsListContainerModule } from '../admin-requests-list-container/admin-requests-list-container.module';

@NgModule({
  declarations: [
    AdminContentContainerComponent,
  ],
  imports: [
    CommonModule,
    TabsModule,
    AdminNoticesListContainerModule,
    AdminFormsListContainerModule,
    AdminUsersListContainerModule,
    AdminRequestsListContainerModule,
  ],
  exports: [
    AdminContentContainerComponent,
  ],
})
export class AdminContentContainerModule { }
