import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NoticeModel } from 'src/app/core/models/notice.model';

@Component({
  selector: 'mr-admin-notices-list',
  templateUrl: './admin-notices-list.component.html',
  styleUrls: ['./admin-notices-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminNoticesListComponent {
  @Input() notices: NoticeModel[];
}
