import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TabEnum } from 'src/app/core/enums/tab.enum';
import { TabModel } from '../../../core/models/tab.model';
import { AdminContentContainerFacade } from './admin-content-container.facade';

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
