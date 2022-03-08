import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFormsListContainerComponent } from './admin-forms-list-container.component';
import { AdminFormsListModule } from 'src/app/ui/blocks/admin-forms-list/admin-forms-list.module';

@NgModule({
  declarations: [
    AdminFormsListContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminFormsListModule,
  ],
  exports: [
    AdminFormsListContainerComponent,
  ],
})
export class AdminFormsListContainerModule { }
