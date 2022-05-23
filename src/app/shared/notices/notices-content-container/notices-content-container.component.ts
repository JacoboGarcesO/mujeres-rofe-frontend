import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';
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
  public cities$: Observable<OptionModel[]>;

  constructor(private facade: NoticesContentContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadNotice();
    this.facade.loadUsers(0);
    this.facade.loadCities();
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

  handleFilterByCity(value: string): void {
    this.facade.loadUsersByCity(value);
  }

  handleFilterByName(value: string): void {
    this.facade.loadUsersByName(value);
  }

  private initializeSubscriptions(): void {
    this.notice$ = this.facade.notice$();
    this.channel$ = this.facade.channel$();
    this.users$ = this.facade.users$();
    this.cities$ = this.facade.cities$();
  }
}
