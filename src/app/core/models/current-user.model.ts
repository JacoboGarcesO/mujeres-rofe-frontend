import { RolsEnum } from '../enums/rols.enum';

export interface CurrentUserModel {
  id: string;
  email: string;
  rol: RolsEnum;
  token: string;
  message: string;
}
