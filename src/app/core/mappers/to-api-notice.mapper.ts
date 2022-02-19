import { Injectable } from '@angular/core';
import { NoticeModel } from '../models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiNoticeMapper {
  map(notice: NoticeModel): any {    
    const formData = new FormData();
    formData.append('title', notice.title);
    formData.append('description', notice.description);
    formData.append('order', notice.order);
    formData.append('links', JSON.stringify(notice.links));
    formData.append('icon', notice.icon.file);
    formData.append('content', notice.content.file);

    return formData;
  }
}
