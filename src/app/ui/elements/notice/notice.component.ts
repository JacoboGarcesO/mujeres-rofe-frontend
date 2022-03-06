import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mr-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoticeComponent { 
  @Input() image: string;
  @Input() title: string;
  @Input() channel: string;
}
