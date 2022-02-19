import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticeModel } from '../../../core/models/notice.model';
import { AdminContentContainerFacade } from './admin-content-container.facade';
import { TabModel } from '../../../core/models/tab.model';
import { TabEnum } from 'src/app/core/enums/tab.enum';

@Component({
  selector: 'mr-admin-content-container',
  templateUrl: './admin-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminContentContainerComponent implements OnInit, OnDestroy {
  public tabs$: Observable<TabModel[]>;
  public tabEnum: typeof TabEnum = TabEnum;

  constructor(private facade: AdminContentContainerFacade) {}
  
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadTabs();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyTabs();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.tabs$ = this.facade.tabs$();
  }
}
