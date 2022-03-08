import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRequestsListContainerComponent } from './admin-requests-list-container.component';
import { AdminRequestListModule } from 'src/app/ui/blocks/admin-request-list/admin-request-list.module';

@NgModule({
  declarations: [
    AdminRequestsListContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminRequestListModule,
  ],
  exports: [
    AdminRequestsListContainerComponent,
  ],
})
export class AdminRequestsListContainerModule { }
