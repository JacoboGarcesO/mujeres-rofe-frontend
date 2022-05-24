import { Injectable } from '@angular/core';
import { toChannelEnum } from '../enums/channel.enum';
import { ChannelModel } from '../models/channel.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToChannelsMapper {
  mapChannels(response: any): ChannelModel[] {
    if (!response?.channels) { return []; }

    return response?.channels?.map(this.mapChannel.bind(this));
  }

  mapChannel(channel: any): ChannelModel {
    return {
      id: channel?._id,
      name: channel?.name,
      description: channel?.description,
      icon: {
        id: channel?.icon?._id,
        url: channel?.icon?.url,
        type: channel?.icon?.type,
      },
      banner: {
        id: channel?.banner?._id,
        url: channel?.banner?.url,
        type: channel?.banner?.type,
      },
      type: toChannelEnum(channel?.type),
      link: channel?.link,
      order: channel?.order,
    };
  }
}
