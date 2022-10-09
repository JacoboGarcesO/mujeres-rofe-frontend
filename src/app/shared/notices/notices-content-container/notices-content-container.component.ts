import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { FilterModel } from 'src/app/core/models/filter.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { NoticesContentContainerFacade } from './notices-content-container.facade.';

@Component({
  selector: 'mr-notices-content-container',
  templateUrl: './notices-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticesContentContainerComponent implements OnInit, OnDestroy {
  public notice$: Observable<NoticeModel>;
  public channel$: Observable<ChannelModel>;
  public users$: Observable<UserModel[]>;
  public cities$: Observable<OptionModel[]>;
  public filter$: Observable<FilterModel>;

  constructor(private facade: NoticesContentContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.setFilter();
    this.facade.loadNotice();
    this.facade.loadCities();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyNotice();
    this.facade.destroyUsers();
    this.facade.destroySubscriptions();
  }
  
  filterUsers(filter: FilterModel): void {
    this.facade.setFilter(filter);
  }

  private initializeSubscriptions(): void {
    this.notice$ = this.facade.notice$();
    this.channel$ = this.facade.channel$();
    this.users$ = this.facade.users$();
    this.filter$ = this.facade.filter$();
    this.cities$ = this.facade.cities$();
  }
}
