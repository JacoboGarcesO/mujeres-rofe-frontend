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
      channel: this.getChannel(notice?.channel),
      links: this.getLinks(notice?.links),
    };
  }

  private getLinks(links: any[]): LinkNoticeModel[] {
    return links?.map((link: any) => ({
      name: link?.name,
      url: link?.url,
    }));
  }

  private getChannel(channel: any): string {
    switch (channel) {
    case 'network':
      return 'red';
    case 'opportunities':
      return 'oportunidades';
    case 'training':
      return 'formación';
    case 'business':
      return 'emprendimiento';
    case 'contact':
      return 'contacto';
    }
  }
}
