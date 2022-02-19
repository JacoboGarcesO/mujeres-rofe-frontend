import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNoticesListContainerComponent } from './admin-notices-list-container.component';
import { AdminNoticesListModule } from 'src/app/ui/blocks/admin-notices-list/admin-notices-list.module';

@NgModule({
  declarations: [
    AdminNoticesListContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminNoticesListModule,
  ],
  exports: [
    AdminNoticesListContainerComponent,
  ],
})
export class AdminNoticesListContainerModule { }
