import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButtonsComponent } from './tab-buttons.component';
import { TextModule } from '../text/text.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    TabButtonsComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    ButtonModule,
  ],
  exports: [
    TabButtonsComponent,
  ],
})
export class TabButtonsModule { }
