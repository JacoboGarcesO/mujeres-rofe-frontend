import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsContentComponent } from './channels-content.component';
import { ChannelsBackgroundModule } from '../../elements/channels-background/channels-background.module';
import { TextModule } from '../../elements/text/text.module';
import { ImageModule } from '../../elements/image/image.module';
import { CardModule } from '../../elements/card/card.module';
import { NoticeModule } from '../../elements/notice/notice.module';
import { TableModule } from '../table/table.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { ButtonModule } from '../../elements/button/button.module';

@NgModule({
  declarations: [
    ChannelsContentComponent,
  ],
  imports: [
    CommonModule,
    ChannelsBackgroundModule,
    TextModule,
    ImageModule,
    CardModule,
    NoticeModule,
    TableModule,
    ButtonIconModule,
    ButtonModule,
  ],
  exports: [
    ChannelsContentComponent,
  ],
})
export class ChannelsContentModule { }
