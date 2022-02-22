import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { NoticesContentContainerFacade } from './notices-content-container.facade.';

@Component({
  selector: 'mr-notices-content-container',
  templateUrl: './notices-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticesContentContainerComponent implements OnInit, OnDestroy {
  public notice$: Observable<NoticeModel>;
  public channel$: Observable<ChannelModel>;

  constructor(private facade: NoticesContentContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadNotice();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyNotice();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.notice$ = this.facade.notice$();
    this.channel$ = this.facade.channel$();
  }
}
