import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NoticeModel } from 'src/app/core/models/notice.model';

@Component({
  selector: 'mr-admin-notices-list',
  templateUrl: './admin-notices-list.component.html',
  styleUrls: ['./admin-notices-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminNoticesListComponent {
  @Input() notices: NoticeModel[];
  @Output() createNotice: EventEmitter<NoticeModel> = new EventEmitter();

  handleCreateNotice(notice: NoticeModel): void {
    this.createNotice.emit(notice);
  }
}
