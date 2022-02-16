import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ChannelsContentContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private channelsService: ChannelsService,
  ) { }

  //#region Observables
  channels$(): Observable<ChannelModel[]> {
    return this.state.channels.channels.$();
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
  //#endregion

  //#region Private Methods
  private storeChannels(channels: ChannelModel[]): void {
    this.state.channels.channels.set(channels);
  }
  //#endregion
}
