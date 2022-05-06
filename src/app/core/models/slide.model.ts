import { MediaModel } from './media.model';

export interface SlideModel {
  title: string;
  image: MediaModel;
  url: string;
  id?: string;
}
