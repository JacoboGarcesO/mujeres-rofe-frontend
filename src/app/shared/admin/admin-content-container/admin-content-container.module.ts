import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContentContainerComponent } from './admin-content-container.component';
import { TabsModule } from '../../../ui/blocks/tabs/tabs.module';
import { AdminNoticesListContainerModule } from '../admin-notices-list-container/admin-notices-list-container.module';
import { AdminUsersListContainerModule } from '../admin-users-list-container/admin-users-list-container.module';
import { AdminFormsListContainerModule } from '../admin-forms-list-container/admin-forms-list-container.module';
import { AdminRequestsListContainerModule } from '../admin-requests-list-container/admin-requests-list-container.module';
import { AdminSlidesListContainerModule } from '../admin-slides-list-container/admin-slides-list-container.module';
import { AdminChannelsListContainerModule } from '../admin-channels-list-container/admin-channels-list-container.module';
import { AdminHighlightedCitiesContainerModule } from '../admin-highlighted-cities-container/admin-highlighted-cities-container.module';

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
    AdminSlidesListContainerModule,
    AdminHighlightedCitiesContainerModule,
    AdminChannelsListContainerModule,
  ],
  exports: [
    AdminContentContainerComponent,
  ],
})
export class AdminContentContainerModule { }
