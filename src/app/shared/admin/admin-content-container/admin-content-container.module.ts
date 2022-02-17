import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContentContainerComponent } from './admin-content-container.component';
import { TableModule } from 'src/app/ui/blocks/table/table.module';
import { CardModule } from 'src/app/ui/elements/card/card.module';
import { TabsModule } from '../../../ui/blocks/tabs/tabs.module';

@NgModule({
  declarations: [
    AdminContentContainerComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    TabsModule,
  ],
  exports: [
    AdminContentContainerComponent,
  ],
})
export class AdminContentContainerModule { }
