import { Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, of, Subscription, tap, filter } from 'rxjs';
import { toChannelEnum } from 'src/app/core/enums/channel.enum';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { FilterModel } from 'src/app/core/models/filter.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { FilterParser } from 'src/app/core/parsers/filter.parser';
import { HighlightedCitiesService } from 'src/app/core/services/highlighted-cities.service';
import { NoticesService } from 'src/app/core/services/notices.service';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class NoticesContentContainerFacade {
  private subscriptions: Subscription;
  private router = inject(Router);
  private parser = inject(FilterParser);
  private location = inject(Location);

  constructor(
    private state: AppState,
    private noticesService: NoticesService,
    private usersService: UsersService,
    private service: HighlightedCitiesService,
  ) { }

  //#region Observables
  notice$(): Observable<NoticeModel> {
    return this.state.notices.notice.$();
  }

  channel$(): Observable<ChannelModel> {
    const url = this.location.path().split('/');
    const channels = this.state.channels.channels.snapshot();
    return of(channels?.find((channel) => channel?.type === toChannelEnum(url[2])));
  }

  users$(): Observable<UserModel[]> {
    return this.state.users.users.$();
  }

  cities$(): Observable<OptionModel[]> {
    return this.state.locations.cities.$();
  }

  totalUsers$(): Observable<number> {
    return this.state.users.totalUsers.$();
  }

  filter$(): Observable<FilterModel> {
    return of({ from: '0', limit: '10', sort: { firstName: 'asc' }, term: null, total: '0' });
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadTotalUsers(): void {
    this.subscriptions.add(
      this.usersService.getTotalUsers().pipe(
        tap(this.state.users.totalUsers.set.bind(this)),
      ).subscribe(),
    );
  }

  destroyTotalUsers(): void {
    this.state.users.totalUsers.set(null);
  }

  loadNotice(): void {
    const noticeId = this.location.path().split('/')[3];

    this.subscriptions.add(
      this.noticesService.getNoticeById(noticeId).pipe(
        tap(this.storeNotice.bind(this)),
      ).subscribe(),
    );
  }

  destroyNotice(): void {
    this.state.notices.notice.set(null);
  }

  loadCities(): void {
    this.subscriptions.add(
      this.service.getAll().pipe(
        tap(this.state.locations.cities.set.bind(this)),
      ).subscribe(),
    );
  }

  destroyCities(): void {
    this.state.locations.cities.set(null);
  }

  loadUsers(): void {
    this.subscriptions.add(
      this.usersService.getUsers(this.getFilter()).pipe(
        tap(this.storeUsers.bind(this)),
      ).subscribe(),
    );
  }

  destroyUsers(): void {
    this.state.users.users.set(null);
  }

  filterUsers(filter: FilterModel): void {
    const url = `/notices/${this.state.notices.notice.snapshot()?.channel}/${this.state.notices.notice.snapshot()?.id}?${this.parser.dataToUrl(filter)}`;    
    this.router.navigateByUrl(url);
  }

  initUrlListener(): void {
    this.subscriptions.add(
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        tap(this.loadUsers.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private Methods
  private storeNotice(notice: NoticeModel): void {
    this.state.notices.notice.set(notice);
  }

  private storeUsers(users: UserModel[]): void {
    this.state.users.users.set(users);
  }

  private getFilter(): FilterModel {
    return this.parser.urlToData(this.location.path());
  }
  //#endregion
}
