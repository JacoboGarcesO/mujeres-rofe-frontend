import { Component, ChangeDetectionStrategy, ViewChild, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { ModalComponent } from '../../elements/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-admin-channels-list',
  templateUrl: './admin-channels-list.component.html',
  styleUrls: ['./admin-channels-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminChannelsListComponent implements OnChanges {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @ViewChild('modalUpdateRef') modalUpdateRef: ModalComponent;
  @Input() channels: ChannelModel[];
  @Input() channelToUpdate: ChannelModel;
  @Input() canCloseModal: boolean;
  @Output() createChannel: EventEmitter<ChannelModel> = new EventEmitter();
  @Output() updateChannel: EventEmitter<ChannelModel> = new EventEmitter();
  @Output() deleteChannel: EventEmitter<string> = new EventEmitter();
  @Output() loadChannelToUpdate: EventEmitter<string> = new EventEmitter();
  private channelId: string;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.modalDeleteRef.close();
    this.modalUpdateRef.close();
    this.cdRef.detectChanges();
  }

  handleCreateChannel(channel: ChannelModel): void {
    this.createChannel.emit(channel);
  }

  handleUpdateChannel(channel: ChannelModel): void {
    this.updateChannel.emit(channel);
  }

  handleDeleteChannel(): void {
    this.deleteChannel.emit(this.channelId);
  }

  setChannelId(channelId: string): void {
    this.channelId = channelId;
  }

  handleLoadChannelToUpdate(channelId: string): void {
    this.loadChannelToUpdate.emit(channelId);
  }

  handleToBack(): void {
    this.router.navigateByUrl('');
  }
}
