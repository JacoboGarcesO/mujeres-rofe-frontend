import { Injectable } from '@angular/core';
import { catchError, EMPTY, finalize, Observable, Subscription, tap } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { ChannelsService } from 'src/app/core/services/channels.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AdminChannelsListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private channelsService: ChannelsService,
  ) { }

  //#region Observables
  channels$(): Observable<ChannelModel[]> {
    return this.state.channels.channels.$();
  }

  canCloseModal$(): Observable<boolean> {
    return this.state.resources.canCloseModal.$();
  }

  currentChannelToUpdate$(): Observable<ChannelModel> {
    return this.state.channels.currentChannelToUpdate.$();
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
    this.state.channels.channels.set(null);
  }

  loadChannel(channelId: string): void {
    this.destroyChannel();
    const channel = this.state.channels.channels.snapshot().find((channel) => channel.id === channelId);
    this.state.channels.currentChannelToUpdate.set(channel);
  }

  destroyChannel(): void {
    this.state.channels.currentChannelToUpdate.set(null);
  }

  destroyCanCloseModal(): void {
    this.state.resources.canCloseModal.set(null);
  }

  createChannel(channel: ChannelModel): void {
    const callback = this.loadChannels.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.channelsService.createChannel(channel).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  updateChannel(channel: ChannelModel): void {
    const callback = this.loadChannels.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.channelsService.updateChannel(channel).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  deleteChannel(channelId: string): void {
    const callback = this.loadChannels.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.channelsService.deleteChannel(channelId).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private Methods
  private storeChannels(channels: ChannelModel[]): void {
    this.state.channels.channels.set(channels);
  }

  private storeCanCloseModal(value: boolean): void {
    this.state.resources.canCloseModal.set(value);
  }

  private notify(
    key: 'init' | 'complete' | 'error',
    callback: () => void = null,
  ): Observable<never> {
    const messages = {
      init: 'Estamos procesando su solicitud',
      complete: 'Su solicitud se completó con éxito',
      error: 'El proceso que solicitaste falló, inténtalo de nuevo más tarde',
    };

    this.state.notifications.notification.set(messages[key]);

    // eslint-disable-next-line angular/timeout-service
    if (!!callback && !(callback instanceof Observable)) { setTimeout(() => callback(), 2000); }
    return EMPTY;
  }

  private notifyClose(callback: () => void = null): void {
    if (this.canClose()) {
      // eslint-disable-next-line angular/timeout-service
      setTimeout(() => {
        this.state.notifications.notification.set(null);
        if (callback) { callback(); }
      }, 5000);
    }
  }

  private canClose(): boolean {
    const lastMessage = this.state.notifications.notification.snapshot();
    const errorMessage = 'La solicitud falló';
    return !lastMessage?.startsWith(errorMessage);
  }
  //#endregion
}
