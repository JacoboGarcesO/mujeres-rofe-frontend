import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSlidesListContainerComponent } from './admin-slides-list-container.component';
import { AdminSlidesListModule } from 'src/app/ui/blocks/admin-slides-list/admin-slides-list.module';

@NgModule({
  declarations: [
    AdminSlidesListContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminSlidesListModule,
  ],
  exports: [
    AdminSlidesListContainerComponent,
  ],
})
export class AdminSlidesListContainerModule { }
