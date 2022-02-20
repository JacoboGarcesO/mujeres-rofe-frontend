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
  @Input() notices: NoticeModel[];
  @Input() channelOptions: OptionModel[];
  @Input() canCloseModal: boolean;
  @Output() createNotice: EventEmitter<NoticeModel> = new EventEmitter();
  @Output() deleteNotice: EventEmitter<NoticeModel> = new EventEmitter();

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.cdRef.detectChanges();
  }

  handleCreateNotice(notice: NoticeModel): void {
    this.createNotice.emit(notice);
  }

  handleDeleteNotice(notice: NoticeModel): void {
    this.deleteNotice.emit(notice);
  }
}
