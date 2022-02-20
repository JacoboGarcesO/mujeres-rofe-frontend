import { RolsEnum } from '../enums/rols.enum';
import { UserLocationModel } from './locations.model';
import { MediaModel } from './media.model';

export interface UserModel {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  rol: RolsEnum;
  isPremium: boolean;
  document: string;
  image: MediaModel | File;
  description: string;
  location: UserLocationModel;
  instagram: string; 
  hobbies: string[];
  phoneNumber: number;
}
