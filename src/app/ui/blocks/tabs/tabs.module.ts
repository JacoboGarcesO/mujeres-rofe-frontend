import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabButtonsModule } from '../../elements/tab-buttons/tab-buttons.module';

@NgModule({
  declarations: [
    TabsComponent,
  ],
  imports: [
    CommonModule,
    TabButtonsModule,
  ],
  exports: [
    TabsComponent,
  ],
})
export class TabsModule { }
