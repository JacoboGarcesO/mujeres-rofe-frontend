import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { UserPaginatedModel } from 'src/app/core/models/user.model';
import { NoticesContentContainerFacade } from './notices-content-container.facade.';

@Component({
  selector: 'mr-notices-content-container',
  templateUrl: './notices-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticesContentContainerComponent implements OnInit, OnDestroy {
  public notice$: Observable<NoticeModel>;
  public channel$: Observable<ChannelModel>;
  public users$: Observable<UserPaginatedModel>;

  constructor(private facade: NoticesContentContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadNotice();
    this.facade.loadUsers(0);
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyNotice();
    this.facade.destroyUsers();
    this.facade.destroySubscriptions();
  }

  loadUsers(from: number): void {
    this.facade.loadUsers(from);
  }

  private initializeSubscriptions(): void {
    this.notice$ = this.facade.notice$();
    this.channel$ = this.facade.channel$();
    this.users$ = this.facade.users$();
  }
}
