import { ChannelEnum } from '../enums/channel.enum';
import { MediaModel } from './media.model';

export interface ChannelModel {
  id: string;
  type: ChannelEnum;
  icon: MediaModel;
  banner: MediaModel;
  name: string;
  link: string;
  description?: string;
  order: string;
}
