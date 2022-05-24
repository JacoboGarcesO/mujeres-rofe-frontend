import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { toChannelEnum } from 'src/app/core/enums/channel.enum';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { UserModel } from 'src/app/core/models/user.model';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { NoticesService } from 'src/app/core/services/notices.service';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ChannelsContentContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private channelsService: ChannelsService,
    private noticesService: NoticesService,
    private usersService: UsersService,
    private location: Location,
  ) { }

  //#region Observables
  channels$(): Observable<ChannelModel[]> {
    return this.state.channels.channels.$();
  }

  channel$(): Observable<ChannelModel> {
    const url = this.location.path().split('/');
    const channels = this.state.channels.channels.snapshot();

    return of(channels?.find((channel)=> channel?.type === toChannelEnum(url[2])));
  }

  notices$(): Observable<NoticeModel[]> {
    return this.state.notices.notices.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadChannels(): void {
    this.subscriptions.add(
      this.channelsService.getChannels().pipe(
        tap(this.storeChannels.bind(this)),
      ).subscribe(),
    );
  }

  destroyChannels(): void {
    this.state.hobbies.hobbies.set(null);
  }

  loadNotices(): void {
    const channel = this.location.path().split('/')[2];

    this.subscriptions.add(
      this.noticesService.getNoticesByChannel(channel).pipe(
        tap(this.storeNotices.bind(this)),
      ).subscribe(),
    );
  }

  destroyNotices(): void {
    this.state.notices.notices.set(null);
  }
  //#endregion

  //#region Private Methods
  private storeChannels(channels: ChannelModel[]): void {
    this.state.channels.channels.set(channels);
  }

  private storeNotices(notices: NoticeModel[]): void {
    this.state.notices.notices.set(notices);
  }
  //#endregion
}
