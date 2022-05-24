import { Injectable } from '@angular/core';
import { ChannelModel } from '../models/channel.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiChannelMapper {
  map(notice: ChannelModel): any {
    const formData = new FormData();
    formData.append('id', notice.id);
    formData.append('name', notice.name);
    formData.append('description', notice?.description);
    formData.append('icon', notice.icon.file);
    formData.append('banner', notice.banner.file);
    formData.append('type', notice?.type);
    formData.append('link', notice.link);

    return formData;
  }
}
