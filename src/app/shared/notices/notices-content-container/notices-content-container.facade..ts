import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { toChannelEnum } from 'src/app/core/enums/channel.enum';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { NoticesService } from 'src/app/core/services/notices.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class NoticesContentContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private noticesService: NoticesService,
    private location: Location,
  ) { }

  //#region Observables
  notice$(): Observable<NoticeModel> {
    return this.state.notices.notice.$();
  }

  channel$(): Observable<ChannelModel> {
    const url = this.location.path().split('/');
    const channels = this.state.channels.channels.snapshot();
    return of(channels.find((channel)=> channel.type === toChannelEnum(url[2])));
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
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
  //#endregion

  //#region Private Methods
  private storeNotice(notice: NoticeModel): void {
    this.state.notices.notice.set(notice);
  }
  //#endregion
}
