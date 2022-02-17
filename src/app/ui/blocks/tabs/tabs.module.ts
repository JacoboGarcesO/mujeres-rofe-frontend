import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabButtonsModule } from '../../elements/tab-buttons/tab-buttons.module';
import { CardModule } from '../../elements/card/card.module';

@NgModule({
  declarations: [
    TabsComponent,
  ],
  imports: [
    CommonModule,
    TabButtonsModule,
    CardModule,
  ],
  exports: [
    TabsComponent,
  ],
})
export class TabsModule { }
