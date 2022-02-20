import { Injectable } from '@angular/core';
import { LinkNoticeModel, NoticeModel } from '../models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToNoticesMapper {
  map(response: any): NoticeModel[] {
    if (!response?.notices) { return []; }

    return response?.notices?.map(this.getNotice.bind(this));
  }

  private getNotice(notice: any): NoticeModel {
    return {
      id: notice?._id,
      title: notice?.title,
      description: notice?.description,
      content: {
        id: notice?.content?._id,
        url: notice?.content?.url,
      },
      icon: {
        id: notice?.icon?._id,
        url: notice?.icon?.url,
      },
      order: notice?.order,
      channel: notice?.chanel,
      links: this.getLinks(notice?.links),
    };
  }

  private getLinks(links: any[]): LinkNoticeModel[] {
    return links?.map((link: any) => ({
      name: link?.name,
      url: link?.url,
    }));
  }
}
