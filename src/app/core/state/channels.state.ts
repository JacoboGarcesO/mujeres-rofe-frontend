import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChannelModel } from '../models/channel.model';
import { OptionModel } from '../models/option.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class ChannelsState {
  private channels$: BehaviorSubject<ChannelModel[]> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      channels: this.factory.state(this.channels$),
    };
  }

}
