import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
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
  ) { }

  //#region Observables 
  currentUser$(): Observable<CurrentUserModel> {
    return this.state.users.currentUser.$();
  }

  channels$(): Observable<ChannelModel[]> {
    return this.state.channels.channels.$();
  }
  //#endregion

  //#region Public methods
  logoutUser(): void {
    this.state.users.currentUser.set(null as unknown as CurrentUserModel);
    this.service.logoutUser();
  }

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
  //#endregion

  //#region Private methods
  private storeChannels(channels: ChannelModel[]): void {
    this.state.channels.channels.set(channels);
  }
  //#endregion
}
