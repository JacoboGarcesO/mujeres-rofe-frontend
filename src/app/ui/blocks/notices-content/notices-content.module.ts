import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesContentComponent } from './notices-content.component';
import { ChannelsBackgroundModule } from '../../elements/channels-background/channels-background.module';
import { ImageModule } from '../../elements/image/image.module';
import { TextModule } from '../../elements/text/text.module';
import { CardModule } from '../../elements/card/card.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';

@NgModule({
  declarations: [
    NoticesContentComponent,
  ],
  imports: [
    CommonModule,
    ChannelsBackgroundModule,
    ImageModule,
    TextModule,
    CardModule,
    ButtonIconModule,
  ],
  exports: [
    NoticesContentComponent,
  ],
})
export class NoticesContentModule { }
