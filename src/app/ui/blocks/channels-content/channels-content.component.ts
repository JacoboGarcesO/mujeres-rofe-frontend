import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';

@Component({
  selector: 'mr-channels-content',
  templateUrl: './channels-content.component.html',
  styleUrls: ['./channels-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChannelsContentComponent {
  @Input() channel: ChannelModel;
}
