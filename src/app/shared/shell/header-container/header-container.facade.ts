import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription, tap } from 'rxjs';
import { toChannelEnum } from 'src/app/core/enums/channel.enum';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { UserModel } from 'src/app/core/models/user.model';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { CurrentUserService } from 'src/app/core/services/current-user.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class HeaderContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: CurrentUserService,
    private channelsService: ChannelsService,
    private location: Location,
    private router: Router,
  ) { }

  //#region Observables
  currentUser$(): Observable<UserModel> {
    return this.state.users.currentUser.$();
  }

  channels$(): Observable<ChannelModel[]> {
    return this.state.channels.channels.$();
  }

  channel$(): Observable<ChannelModel> {
    const url = this.location.path().split('/');
    const channels = this.state.channels.channels.snapshot();

    return of(channels?.find((channel)=> channel?.type === toChannelEnum(url[2])));
  }
  //#endregion

  //#region Public methods
  logoutUser(): void {
    this.state.users.currentUser.set(null);
    this.service.logoutUser();
    this.router.navigateByUrl('/auth/login');
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }
  //#endregion

  //#endregion
}
