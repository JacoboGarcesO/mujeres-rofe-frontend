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
        type: response?.notices[0]?.content?.type,
      },
      icon: {
        id: response?.notices[0]?.icon?._id,
        url: response?.notices[0]?.icon?.url,
        type: response?.notices[0]?.icon?.type,
      },
      order: response?.notices[0]?.order,
      channel: response?.notices[0]?.channel,
      showUsersList: response?.notices[0]?.showUsersList,
      isLink: response?.notices[0]?.isLink,
      url: response?.notices[0]?.url,
      links: this.getLinks(response?.notices[0]?.links),
      formId: response?.notices[0]?.formId,
    };
  }

  private getLinks(links: any[]): LinkNoticeModel[] {
    return links?.map((link: any) => ({
      name: link?.name,
      url: link?.url,
    }));
  }
}
