import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsContentContainerComponent } from './channels-content-container.component';
import { ChannelsContentModule } from '../../../ui/blocks/channels-content/channels-content.module';

@NgModule({
  declarations: [
    ChannelsContentContainerComponent,
  ],
  imports: [
    CommonModule,
    ChannelsContentModule,
  ],
  exports: [
    ChannelsContentContainerComponent,
  ],
})
export class ChannelsContentContainerModule { }
