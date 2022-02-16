import { ChannelEnum } from '../enums/channel.enum';

export interface ChannelModel {
  type: ChannelEnum;
  icon: string;
  banner: string;
  name: string;
  link: string;
  description?: string;
}
