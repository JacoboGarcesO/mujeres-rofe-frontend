import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { UserModel } from './core/models/user.model';
import { CurrentUserService } from './core/services/current-user.service';
import { AppState } from './core/state/app.state';
import { ChannelsService } from './core/services/channels.service';
import { ChannelModel } from './core/models/channel.model';

@Component({
  selector: 'mr-root',
  template: '<ng-container><router-outlet></router-outlet></ng-container>',
})
export class AppComponent implements OnInit {
  constructor(
    private appState: AppState,
    private currentUserService: CurrentUserService,
    private channelsService: ChannelsService,
  ) { }

  ngOnInit(): void {
    this.initializeUser();
    this.jacoboGay();
  }

  private initializeUser(): void {
    this.currentUserService.getCurrentUser().pipe(
      tap(this.storeCurrentUser.bind(this)),
    ).subscribe();
  }

  private jacoboGay(): void {
    this.channelsService.getChannels().pipe(
      tap(this.storeChannels.bind(this)),
    ).subscribe();
  }

  private storeCurrentUser(currentUser: UserModel): void {
    this.appState.users.currentUser.set(currentUser);
  }

  private storeChannels(channels: ChannelModel[]): void {
    this.appState.channels.channels.set(channels);
  }
}
