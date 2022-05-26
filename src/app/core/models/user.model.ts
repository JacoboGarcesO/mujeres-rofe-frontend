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
  documentNumber: string;
  image: MediaModel;
  description: string;
  location: UserLocationModel;
  instagram: string;
  facebook: string;
  hobbies: string[];
  phoneNumber: number;
  documentType: string,
  maritalStatus: string,
  address: string,
  age: string,
  familyCore: string,
  familyIncome: string,
  housingType: string,
  education: string,
  stratum: string,
  promocionalCode: string,
  disclosure: string,
  ethnicGroup: string[],
  sustaining: string[],
  documentImage: MediaModel,
  creationDate: Date;
  isAccept?: boolean;
}

export interface UserPaginatedModel {
  users: UserModel[];
  total: number;
}
