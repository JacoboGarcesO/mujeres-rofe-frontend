import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { UserModel } from './core/models/user.model';
import { CurrentUserService } from './core/services/current-user.service';
import { AppState } from './core/state/app.state';
import { ChannelsService } from './core/services/channels.service';
import { ChannelModel } from './core/models/channel.model';
import { StorageService } from './core/services/generals/storage.service';

@Component({
  selector: 'mr-root',
  template: '<ng-container><router-outlet></router-outlet></ng-container>',
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private currentUserService: CurrentUserService,
    private channelsService: ChannelsService,
    private storageService: StorageService,
  ) { }
  
  ngOnInit(): void {
    this.initSubscriptions();
    this.initializeUser();
    if (this.state.users.currentUser.snapshot()?.id) {
      this.getChannels();
    }
  }

  ngOnDestroy(): void {
    this.destroySubscriptions();
  }

  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  private initializeUser(): void {
    this.subscriptions.add(
      this.currentUserService.getCurrentUser().pipe(
        tap(this.storeCurrentUser.bind(this)),
      ).subscribe(),
    );
  }

  private getChannels(): void {
    const channels = this.storageService.get<ChannelModel[]>('CHANNELS');

    if (channels) { 
      this.storeChannels(channels);
      return;
    }

    this.subscriptions.add(
      this.channelsService.getChannels().pipe(
        tap(this.storeChannels.bind(this)),
      ).subscribe(),
    );
  }

  private storeCurrentUser(currentUser: UserModel): void {
    this.state.users.currentUser.set(currentUser);
  }

  private storeChannels(channels: ChannelModel[]): void {
    this.state.channels.channels.set(channels);
  }
}
