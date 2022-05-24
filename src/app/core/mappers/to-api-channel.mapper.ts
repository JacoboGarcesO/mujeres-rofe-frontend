import { Injectable } from '@angular/core';
import { ChannelModel } from '../models/channel.model';
import { MediaModel } from '../models/media.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiChannelMapper {
  map(channel: ChannelModel): any {
    const formData = new FormData();
    formData.append('id', channel.id);
    formData.append('name', channel.name);
    formData.append('description', channel?.description);
    formData.append('icon', channel.icon.file);
    formData.append('iconEncoded', this.getImage(channel.icon));
    formData.append('bannerEncoded', this.getImage(channel.banner));
    formData.append('banner', channel.banner.file);
    formData.append('type', channel?.type);
    formData.append('link', channel.link);
    formData.append('order', channel.order);

    return formData;
  }

  private getImage(image: MediaModel): string {
    const media = {
      _id: image.id,
      url: image.url,
    };

    return JSON.stringify(media);
  }
}
