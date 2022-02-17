import { Injectable } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { NoticesService } from 'src/app/core/services/notices.service';
import { AppState } from 'src/app/core/state/app.state';
import { NoticeModel } from '../../../core/models/notice.model';
import { TabModel } from '../../../core/models/tab.model';
import { TabsService } from '../../../core/services/tabs.service';

@Injectable({
  providedIn: 'root',
})
export class AdminContentContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private noticesService: NoticesService,
    private tabsService: TabsService,
  ) { }

  //#region Observables
  notices$(): Observable<NoticeModel[]> {
    return this.state.notices.notices.$();
  }

  tabs$(): Observable<TabModel[]> {
    return this.state.tabs.tabs.$();
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

  loadTabs(): void {
    this.subscriptions.add(
      this.tabsService.getTabs().pipe(
        tap(this.storeTabs.bind(this)),
      ).subscribe(),
    );
  }

  destroyNotices(): void {
    this.state.notices.notices.set(null);
  }

  destroyTabs(): void {
    this.state.tabs.tabs.set(null);
  }
  //#endregion

  //#region Private Methods
  private storeNotices(notices: NoticeModel[]): void {
    this.state.notices.notices.set(notices);
  }    

  private storeTabs(tabs: TabModel[]): void {
    this.state.tabs.tabs.set(tabs);
  } 
  //#endregion
}
