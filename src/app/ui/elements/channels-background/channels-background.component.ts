import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mr-channels-background',
  templateUrl: './channels-background.component.html',
  styleUrls: ['./channels-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None, 
})
export class ChannelsBackgroundComponent {
  @Input() bannerImage: string;
}
