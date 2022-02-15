import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'mr-channels-background',
  templateUrl: './channels-background.component.html',
  styleUrls: ['./channels-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelsBackgroundComponent {
  @Input() bannerImage: string;
}
