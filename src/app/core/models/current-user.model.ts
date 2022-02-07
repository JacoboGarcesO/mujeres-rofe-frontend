import { RolsEnum } from '../enums/rols.enum';
import { UserLocationModel } from './locations.model';
import { MediaModel } from './media.model';

export interface CurrentUserModel {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  nameComplete: string;
  rol: RolsEnum;
  token: string;
  message: string;
  isPending: boolean;
  image?: MediaModel | File;
  description?: string;
  location?: UserLocationModel;
  instagram?: string; 
  hobbies?: string[];
  phoneNumber?: number;
}
