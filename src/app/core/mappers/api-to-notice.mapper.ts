import { Injectable } from '@angular/core';
import { NoticeModel, LinkNoticeModel } from '../models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToNoticeMapper {
  map(response: any): NoticeModel {
    return {
      id: response?.notices[0]?._id,
      title: response?.notices[0]?.title,
      description: response?.notices[0]?.description,
      content: {
        id: response?.notices[0]?.content?._id,
        url: response?.notices[0]?.content?.url,
      },
      icon: {
        id: response?.notices[0]?.icon?._id,
        url: response?.notices[0]?.icon?.url,
      },
      order: response?.notices[0]?.order,
      channel: response?.notices[0]?.channel,
      links: this.getLinks(response?.notices[0]?.links),
    };
  }

  private getLinks(links: any[]): LinkNoticeModel[] {
    return links?.map((link: any) => ({
      name: link?.name,
      url: link?.url,
    }));
  }
}
