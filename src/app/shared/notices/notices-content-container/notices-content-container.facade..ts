import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
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
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }
  
  loadNotice(): void {
    const noticeId = this.location.path().split('/')[2];

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
