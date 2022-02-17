import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticeModel } from '../../../core/models/notice.model';
import { AdminContentContainerFacade } from './admin-content-container.facade';
import { TabModel } from '../../../core/models/tab.model';

@Component({
  selector: 'mr-admin-content-container',
  templateUrl: './admin-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminContentContainerComponent implements OnInit, OnDestroy {
  public notices$: Observable<NoticeModel[]>;
  public tabs$: Observable<TabModel[]>;

  constructor(private facade: AdminContentContainerFacade) {}
  
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadNotices();
    this.facade.loadTabs();
    this.initializeSubscriptions();
    
  }

  ngOnDestroy(): void {
    this.facade.destroyNotices();
    this.facade.destroyTabs();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.notices$ = this.facade.notices$();
    this.tabs$ = this.facade.tabs$();
  }
}
