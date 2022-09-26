import { Injectable } from '@angular/core';
import { NoticeModel, LinkNoticeModel } from '../models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToNoticeMapper {
  map(result: any): NoticeModel {
    return {
      id: result?._id,
      title: result?.title,
      description: result?.description,
      content: {
        id: result?.content?._id,
        url: result?.content?.url,
        type: result?.content?.type,
      },
      icon: {
        id: result?.icon?._id,
        url: result?.icon?.url,
        type: result?.icon?.type,
      },
      order: result?.order,
      channel: result?.channel,
      showUsersList: result?.showUsersList,
      isLink: result?.isLink,
      url: result?.url,
      formId: result?.formId,
      links: this.getLinks(result?.links),
    };
  }

  private getLinks(links: any[]): LinkNoticeModel[] {
    return links?.map((link: any) => ({
      name: link?.name,
      url: link?.url,
    }));
  }
}
