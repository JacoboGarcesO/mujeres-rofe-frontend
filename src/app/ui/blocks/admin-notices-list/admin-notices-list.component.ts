import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, OnChanges, ChangeDetectorRef } from '@angular/core';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { ModalComponent } from '../../elements/modal/modal.component';

@Component({
  selector: 'mr-admin-notices-list',
  templateUrl: './admin-notices-list.component.html',
  styleUrls: ['./admin-notices-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminNoticesListComponent implements OnChanges {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @Input() notices: NoticeModel[];
  @Input() channelOptions: OptionModel[];
  @Input() canCloseModal: boolean;
  @Output() createNotice: EventEmitter<NoticeModel> = new EventEmitter();
  @Output() deleteNotice: EventEmitter<string> = new EventEmitter();
  private noticeId: string;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.modalDeleteRef.close();
    this.cdRef.detectChanges();
  }

  handleCreateNotice(notice: NoticeModel): void {
    this.createNotice.emit(notice);
  }

  handleDeleteNotice(): void {
    this.deleteNotice.emit(this.noticeId);
  }

  setNoticeId(noticeId: string): void {
    this.noticeId = noticeId;
  }
}
