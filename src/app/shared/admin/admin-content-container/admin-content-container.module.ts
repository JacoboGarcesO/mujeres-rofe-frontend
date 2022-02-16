import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContentContainerComponent } from './admin-content-container.component';
import { TableModule } from 'src/app/ui/blocks/table/table.module';
import { CardModule } from 'src/app/ui/elements/card/card.module';

@NgModule({
  declarations: [
    AdminContentContainerComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
  ],
  exports: [
    AdminContentContainerComponent,
  ],
})
export class AdminContentContainerModule { }
