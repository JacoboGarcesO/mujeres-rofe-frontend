import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContentContainerComponent } from './admin-content-container.component';
import { TabsModule } from '../../../ui/blocks/tabs/tabs.module';
import { AdminNoticesListContainerModule } from '../admin-notices-list-container/admin-notices-list-container.module';
import { AdminUsersListContainerModule } from '../admin-users-list-container/admin-users-list-container.module';
import { RegisterContainerModule } from '../../authentication/register-container/register-container.module';

@NgModule({
  declarations: [
    AdminContentContainerComponent,
  ],
  imports: [
    CommonModule,
    TabsModule,
    AdminNoticesListContainerModule,
    AdminUsersListContainerModule,
    RegisterContainerModule,
  ],
  exports: [
    AdminContentContainerComponent,
  ],
})
export class AdminContentContainerModule { }
