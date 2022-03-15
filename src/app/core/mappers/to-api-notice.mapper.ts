import { Injectable } from '@angular/core';
import { MediaModel } from '../models/media.model';
import { NoticeModel } from '../models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiNoticeMapper {
  map(notice: NoticeModel): any {    
    const formData = new FormData();
    formData.append('id', notice.id);
    formData.append('title', notice.title);
    formData.append('description', notice?.description ?? '');
    formData.append('order', notice.order);
    formData.append('links', JSON.stringify(notice.links));
    formData.append('icon', notice.icon.file);
    formData.append('iconEncoded', this.getImage(notice.icon));
    formData.append('content', notice.content.file);
    formData.append('contentEncoded', this.getImage(notice.content));
    formData.append('channel', notice.channel);
    formData.append('showUsersList', 'false');
    formData.append('url', notice.url);

    if (notice?.formId) {
      formData.append('formId', notice?.formId);
    }

    notice.url ? formData.append('isLink', 'true') : formData.append('isLink', 'false');

    return formData;
  }

  private getImage(image: MediaModel): string {
    const media = {
      _id: image.id,
      url:image.url,
    };

    return JSON.stringify(media);
  }
}
