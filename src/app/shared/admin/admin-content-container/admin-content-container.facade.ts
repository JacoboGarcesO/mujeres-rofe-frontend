import { Injectable } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { NoticesService } from 'src/app/core/services/notices.service';
import { AppState } from 'src/app/core/state/app.state';
import { NoticeModel } from '../../../core/models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class AdminContentContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private noticesService: NoticesService,
  ) { }

  //#region Observables
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
  //#endregion

  //#region Private Methods
  private storeNotices(notices: NoticeModel[]): void {
    this.state.notices.notices.set(notices);
  }    
  //#endregion
}
