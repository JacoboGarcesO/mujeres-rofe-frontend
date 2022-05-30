import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, OnChanges, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { ModalComponent } from '../../elements/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-admin-notices-list',
  templateUrl: './admin-notices-list.component.html',
  styleUrls: ['./admin-notices-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminNoticesListComponent implements OnChanges {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @ViewChild('modalUpdateRef') modalUpdateRef: ModalComponent;
  @Input() notices: NoticeModel[];
  @Input() noticeToUpdate: NoticeModel;
  @Input() channelOptions: OptionModel[];
  @Input() forms: OptionModel[];
  @Input() canCloseModal: boolean;
  @Output() noticesByChannel: EventEmitter<string> = new EventEmitter();
  @Output() createNotice: EventEmitter<NoticeModel> = new EventEmitter();
  @Output() updateNotice: EventEmitter<NoticeModel> = new EventEmitter();
  @Output() deleteNotice: EventEmitter<string> = new EventEmitter();
  @Output() loadNoticeToUpdate: EventEmitter<string> = new EventEmitter();
  private noticeId: string;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  get channelOptionsAll (): OptionModel[] {
    return [{ id: '', label: 'Todos' }, ...this.channelOptions ?? []];
  }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.modalDeleteRef.close();
    this.modalUpdateRef.close();
    this.cdRef.detectChanges();
  }

  handleCreateNotice(notice: NoticeModel): void {
    this.createNotice.emit(notice);
  }

  handleUpdateNotice(notice: NoticeModel): void {
    this.updateNotice.emit(notice);
  }

  handleDeleteNotice(): void {
    this.deleteNotice.emit(this.noticeId);
  }

  setNoticeId(noticeId: string): void {
    this.noticeId = noticeId;
  }

  handleLoadNoticeToUpdate(noticeId: string): void {
    this.loadNoticeToUpdate.emit(noticeId);
  }

  handleFilterNotices(channel: {value: string}): void {
    this.noticesByChannel.emit(channel.value);
  }

  handleToBack(): void {
    this.router.navigateByUrl('');
  }
}
