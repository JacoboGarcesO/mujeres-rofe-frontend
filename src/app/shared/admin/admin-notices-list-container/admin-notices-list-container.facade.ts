import { Injectable } from '@angular/core';
import { catchError, EMPTY, finalize, Observable, Subscription, tap } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { ChannelsOptionsService } from 'src/app/core/services/channels-options.service';
import { FormRequestsService } from 'src/app/core/services/form-requests.service';
import { NoticesService } from 'src/app/core/services/notices.service';
import { AppState } from 'src/app/core/state/app.state';
import { NoticeModel } from '../../../core/models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class AdminNoticesListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private noticesService: NoticesService,
    private channelsOptionsService: ChannelsOptionsService,
    private formRequestsService: FormRequestsService,
  ) { }

  //#region Observables
  notices$(): Observable<NoticeModel[]> {
    return this.state.notices.notices.$();
  }

  canCloseModal$(): Observable<boolean> {
    return this.state.resources.canCloseModal.$();
  }

  channelOptions$(): Observable<OptionModel[]> {
    return this.state.channels.channelsResource.$();
  }

  currentNoticeToUpdate$(): Observable<NoticeModel> {
    return this.state.notices.currentNoticeToUpdate.$();
  }

  forms$(): Observable<OptionModel[]> {
    return this.state.resources.templates.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadNotices(): void {
    this.subscriptions.add(
      this.noticesService.getNotices().pipe(
        tap(this.storeNotices.bind(this)),
      ).subscribe(),
    );
  }

  destroyNotices(): void {
    this.state.notices.notices.set(null);
  }

  loadForms(): void {
    this.subscriptions.add(
      this.formRequestsService.getFormRequestsOptions().pipe(
        tap(this.state.resources.templates.set.bind(this)),
      ).subscribe(),
    );
  }

  destroyForms(): void {
    this.state.formRequest.forms.set(null);
  }

  loadNoticesByChannel(channel: string): void {
    this.subscriptions.add(
      this.noticesService.getNoticesByChannel(channel).pipe(
        tap(this.storeNotices.bind(this)),
      ).subscribe(),
    );
  }

  destroyNoticesByChannel(): void {
    this.state.notices.notices.set(null);
  }

  loadNotice(noticeId: string): void {
    this.destroyNotice();
    const notice = this.state.notices.notices.snapshot().find((notice) => notice.id === noticeId);
    this.state.notices.currentNoticeToUpdate.set(notice);
  }

  destroyNotice(): void {
    this.state.notices.currentNoticeToUpdate.set(null);
  }

  loadChannelOptions(): void {
    this.subscriptions.add(
      this.channelsOptionsService.getChannels().pipe(
        tap(this.storeChannelOptions.bind(this)),
      ).subscribe(),
    );
  }

  destroyChannelOptions(): void {
    this.state.channels.channelsResource.set(null);
  }

  destroyCanCloseModal(): void {
    this.state.resources.canCloseModal.set(null);
  }

  createNotice(notice: NoticeModel): void {
    const callback = this.loadNotices.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.noticesService.createNotice(notice).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  updateNotice(notice: NoticeModel): void {
    const callback = this.loadNotices.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.noticesService.updateNotice(notice).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  deleteNotice(noticeId: string): void {
    const callback = this.loadNotices.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.noticesService.deleteNotice(noticeId).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private Methods
  private storeNotices(notices: NoticeModel[]): void {
    this.state.notices.notices.set(notices);
  }

  private storeChannelOptions(channels: OptionModel[]): void {
    this.state.channels.channelsResource.set(channels);
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
