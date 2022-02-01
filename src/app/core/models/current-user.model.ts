import { RolsEnum } from '../enums/rols.enum';
import { MediaModel } from './media.model';

export interface CurrentUserModel {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  nameComplete: string;
  rol: RolsEnum;
  token: string;
  image: MediaModel;
  message: string;
}
