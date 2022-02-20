import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'mr-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticeComponent { 
  @Input() image: string;
  @Input() title: string;
  @Input() channel: string;
}
