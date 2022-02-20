import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { ChannelsContentContainerFacade } from './channels-content-container.facade';

@Component({
  selector: 'mr-channels-content-container',
  templateUrl: './channels-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelsContentContainerComponent implements OnInit, OnDestroy {
  public channel$: Observable<ChannelModel>;
  public notices$: Observable<NoticeModel[]>;

  constructor(private facade: ChannelsContentContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadChannels();
    this.facade.loadNotices();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyChannels();
    this.facade.destroyNotices();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.channel$ = this.facade.channel$();
    this.notices$ = this.facade.notices$();
  }
}
