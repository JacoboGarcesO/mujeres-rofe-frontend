import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { LayoutMainModule } from '../../ui/layouts/layout-main/layout-main.module';
import { HeaderContainerModule } from '../../shared/shell/header-container/header-container.module';
import { ChannelsContentContainerModule } from '../../shared/channels/channels-content-container/channels-content-container.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    LayoutMainModule,
    HeaderContainerModule,
    ChannelsContentContainerModule,
  ],
})
export class ChannelsModule { }
