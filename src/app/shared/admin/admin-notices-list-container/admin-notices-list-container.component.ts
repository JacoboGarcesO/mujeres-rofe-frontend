import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { AdminNoticesListContainerFacade } from './admin-notices-list-container.facade';

@Component({
  selector: 'mr-admin-notices-list-container',
  templateUrl: './admin-notices-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminNoticesListContainerComponent implements OnInit, OnDestroy {
  public notices$: Observable<NoticeModel[]>;
  public canCloseModal$: Observable<boolean>;

  constructor(private facade: AdminNoticesListContainerFacade) {}
  
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadNotices();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyNotices();
    this.facade.destroyCanCloseModal();
    this.facade.destroySubscriptions();
  }

  handleCreateNotice(notice: NoticeModel): void {
    this.facade.createNotice(notice);
  }

  private initializeSubscriptions(): void {
    this.notices$ = this.facade.notices$();
    this.canCloseModal$ = this.facade.canCloseModal$();
  }
}
