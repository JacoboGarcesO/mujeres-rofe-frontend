import { UserModel } from './user.model';

export interface CurrentUserModel {
  user: UserModel;
  message: string;
  token: string;
}
