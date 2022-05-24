import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AdminChannelsListContainerFacade } from './admin-channels-container.facade';
import { ChannelModel } from '../../../core/models/channel.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'mr-admin-channels-list-container',
  templateUrl: './admin-channels-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminChannelsListContainerComponent implements OnInit, OnDestroy {
  public channels$: Observable<ChannelModel[]>;
  public channelToUpdate$: Observable<ChannelModel>;
  public canCloseModal$: Observable<boolean>;

  constructor(private facade: AdminChannelsListContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadChannels();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyChannel();
    this.facade.destroyCanCloseModal();
    this.facade.destroySubscriptions();
  }

  handleCreateChannel(channel: ChannelModel): void {
    this.facade.createChannel(channel);
  }

  handleDeleteChannel(channelId: string): void {
    this.facade.deleteChannel(channelId);
  }

  handleLoadChannelToUpdate(channelId: string): void {
    this.facade.destroyCanCloseModal();
    this.facade.loadChannel(channelId);
  }

  handleUpdateChannel(channel: ChannelModel): void {
    this.facade.updateChannel(channel);
  }

  private initializeSubscriptions(): void {
    this.channels$ = this.facade.channels$();
    this.canCloseModal$ = this.facade.canCloseModal$();
    this.channelToUpdate$ = this.facade.currentChannelToUpdate$();
  }
}
