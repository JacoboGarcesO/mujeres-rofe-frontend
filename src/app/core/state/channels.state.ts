import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChannelModel } from '../models/channel.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class channelsResourcesState {
  private channels$: BehaviorSubject<ChannelModel[]> = new BehaviorSubject(null);
  private channelsResources$: BehaviorSubject<ChannelModel[]> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      channels: this.factory.state(this.channels$),
      channelsResources: this.factory.state(this.channelsResources$),
    };
  }

}
