import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';

@Component({
  selector: 'mr-notices-content',
  templateUrl: './notices-content.component.html',
  styleUrls: ['./notices-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoticesContentComponent {
  @Input() notice: NoticeModel;
  @Input() channel: ChannelModel;
}
