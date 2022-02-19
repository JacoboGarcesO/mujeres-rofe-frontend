import { MediaModel } from './media.model';

export interface LinkNoticeModel {
  name:  string;
  url: string;
}

export interface NoticeModel {
  id: string;
  title: string;
  description: string;
  icon: MediaModel;
  content: MediaModel;
  links: LinkNoticeModel[];
}
