import { Location } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { toChannelEnum } from 'src/app/core/enums/channel.enum';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { FilterModel } from 'src/app/core/models/filter.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { HighlightedCitiesService } from 'src/app/core/services/highlighted-cities.service';
import { NoticesService } from 'src/app/core/services/notices.service';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class NoticesContentContainerFacade {
  private subscriptions: Subscription;
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

  filter$(): Observable<FilterModel> {
    return this.state.resources.filter.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  setFilter(filter?: FilterModel): void {
    this.state.resources.filter.set({
      from: filter?.from ? (filter?.from - 1) * 10 : 0,
      limit: filter?.limit ?? 10,
      sort: { firstName: 'asc' },
      term: filter?.term,
      total: filter?.total,
      currentPage: filter?.currentPage ?? 1,
    });

    this.loadUsers();
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

  destroyUsers(): void {
    this.state.users.users.set(null);
  }
  //#endregion

  //#region Private Methods
  private storeNotice(notice: NoticeModel): void {
    this.state.notices.notice.set(notice);
  }

  private storeUsers({ users, filter }: { users: UserModel[]; filter: FilterModel }): void {
    const filterSate = this.state.resources.filter.snapshot();
    this.state.users.users.set(users);
    this.state.resources.filter.set({ ...filter, ...filterSate });
  }

  private loadUsers(): void {
    const filter = this.state.resources.filter.snapshot();
    this.subscriptions.add(
      this.usersService.getUsers(filter).pipe(
        tap(this.storeUsers.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion
}
