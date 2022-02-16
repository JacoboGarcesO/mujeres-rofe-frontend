interface linkNoticeModel {
  name:  string,
  url: string,
}

export interface NoticeModel {
  title: string;
  description?: string;
  icon: string;
  content: string;
  link: linkNoticeModel[];
}
