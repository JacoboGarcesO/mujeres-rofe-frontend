import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChannelsListContainerComponent } from './admin-channels-list-container.component';
import { AdminChannelsListModule } from '../../../ui/blocks/admin-channels-list/admin-channels-list.module';


@NgModule({
  declarations: [
    AdminChannelsListContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminChannelsListModule,
  ],
  exports: [
    AdminChannelsListContainerComponent,
  ],
})
export class AdminChannelsListContainerModule { }
