import { MediaModel } from './media.model';

export interface LinkNoticeModel {
  name:  string;
  url: string;
}

export interface NoticeModel {
  id: string;
  title: string;
  description: string;
  channel: string;
  icon: MediaModel;
  content: MediaModel;
  order: string;
  links: LinkNoticeModel[];
}
