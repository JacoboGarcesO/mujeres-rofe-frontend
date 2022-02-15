import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mr-channels-content',
  templateUrl: './channels-content.component.html',
  styleUrls: ['./channels-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChannelsContentComponent { }
