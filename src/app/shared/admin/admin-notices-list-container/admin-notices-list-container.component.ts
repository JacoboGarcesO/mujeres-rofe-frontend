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
  public canCloseModal$: Observable<boolean>;
  public channelOptions$: Observable<OptionModel[]>;

  constructor(private facade: AdminNoticesListContainerFacade) {}
  
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadNotices();
    this.facade.loadChannelOptions();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyNotices();
    this.facade.destroyCanCloseModal();
    this.facade.destroyChannelOptions();
    this.facade.destroySubscriptions();
  }

  handleCreateNotice(notice: NoticeModel): void {
    this.facade.createNotice(notice);
  }

  handleDeleteNotice(notice: NoticeModel): void {
    this.facade.deleteNotice(notice);
  }

  private initializeSubscriptions(): void {
    this.notices$ = this.facade.notices$();
    this.canCloseModal$ = this.facade.canCloseModal$();
    this.channelOptions$ = this.facade.channelOptions$();
  }
}
