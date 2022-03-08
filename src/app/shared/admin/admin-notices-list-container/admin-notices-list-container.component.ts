import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { AdminNoticesListContainerFacade } from './admin-notices-list-container.facade';

@Component({
  selector: 'mr-admin-notices-list-container',
  templateUrl: './admin-notices-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminNoticesListContainerComponent implements OnInit, OnDestroy {
  public notices$: Observable<NoticeModel[]>;
  public noticeToUpdate$: Observable<NoticeModel>;
  public canCloseModal$: Observable<boolean>;
  public channelOptions$: Observable<OptionModel[]>;
  public forms$: Observable<OptionModel[]>;

  constructor(private facade: AdminNoticesListContainerFacade) {}
  
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadNotices();
    this.facade.loadChannelOptions();
    this.facade.loadForms();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyNotices();
    this.facade.destroyNotice();
    this.facade.destroyNoticesByChannel();
    this.facade.destroyCanCloseModal();
    this.facade.destroyChannelOptions();
    this.facade.destroyForms();
    this.facade.destroySubscriptions();
  }

  handleLoadNoticesByChannel(channel: string): void {
    if(channel) {
      this.facade.loadNoticesByChannel(channel);
    } else {
      this.facade.loadNotices();
    }
  }

  handleCreateNotice(notice: NoticeModel): void {
    this.facade.createNotice(notice);
  }

  handleDeleteNotice(noticeId: string): void {
    this.facade.deleteNotice(noticeId);
  }

  handleLoadNoticeToUpdate(noticeId: string): void {
    this.facade.destroyCanCloseModal();
    this.facade.loadNotice(noticeId);
  }

  handleUpdateNotice(notice: NoticeModel): void {
    this.facade.updateNotice(notice);
  }

  private initializeSubscriptions(): void {
    this.notices$ = this.facade.notices$();
    this.canCloseModal$ = this.facade.canCloseModal$();
    this.channelOptions$ = this.facade.channelOptions$();
    this.noticeToUpdate$ = this.facade.currentNoticeToUpdate$();
    this.forms$ = this.facade.forms$();
  }
}
