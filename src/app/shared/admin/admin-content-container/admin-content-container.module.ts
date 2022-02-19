import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContentContainerComponent } from './admin-content-container.component';
import { TableModule } from 'src/app/ui/blocks/table/table.module';
import { CardModule } from 'src/app/ui/elements/card/card.module';
import { TabsModule } from '../../../ui/blocks/tabs/tabs.module';
import { ImageModule } from '../../../ui/elements/image/image.module';
import { ButtonModule } from '../../../ui/elements/button/button.module';
import { TextModule } from '../../../ui/elements/text/text.module';
import { ModalModule } from '../../../ui/elements/modal/modal.module';
import { AdminNoticesListContainerModule } from '../admin-notices-list-container/admin-notices-list-container.module';

@NgModule({
  declarations: [
    AdminContentContainerComponent,
  ],
  imports: [
    CommonModule,
    TabsModule,
    AdminNoticesListContainerModule,
  ],
  exports: [
    AdminContentContainerComponent,
  ],
})
export class AdminContentContainerModule { }
