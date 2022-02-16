import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticeModel } from '../../../core/models/notice.model';
import { AdminContentContainerFacade } from './admin-content-container.facade';

@Component({
  selector: 'mr-admin-content-container',
  templateUrl: './admin-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminContentContainerComponent implements OnInit, OnDestroy {
  public notices$: Observable<NoticeModel[]>;

  constructor( private facade: AdminContentContainerFacade ) {}
  
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadNotices();
    this.initializeSubscriptions();
    console.log(this.notices$);
  }

  ngOnDestroy(): void {
    this.facade.destroyNotices();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.notices$ = this.facade.notices$();
  }
}
