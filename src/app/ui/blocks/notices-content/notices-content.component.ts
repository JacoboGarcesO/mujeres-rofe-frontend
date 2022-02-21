import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NoticeModel } from '../../../core/models/notice.model';

@Component({
  selector: 'mr-notices-content',
  templateUrl: './notices-content.component.html',
  styleUrls: ['./notices-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticesContentComponent {
  @Input() notice: NoticeModel;
}
