import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { NoticeModel } from '../../../core/models/notice.model';

@Component({
  selector: 'mr-notice-info',
  templateUrl: './notice-info.component.html',
  styleUrls: ['./notice-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoticeInfoComponent { 
  @Input() notice: NoticeModel;
}
