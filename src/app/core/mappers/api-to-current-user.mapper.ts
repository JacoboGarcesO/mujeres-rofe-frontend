import { Injectable } from '@angular/core';
import { toRolEnum } from '../enums/rols.enum';
import { CurrentUserModel } from '../models/current-user.model';
import { MessageUtil } from '../utils/message.util';

@Injectable({
  providedIn: 'root',
})
export class ApiToCurrentUserMapper {
  map(response: any): CurrentUserModel {
    return {
      email: response?.user?.email,
      id: response?.user?._id,
      rol: toRolEnum(response?.user?.rol),
      token: response?.token,
      message: MessageUtil.trasnformToMessage(response?.message),
    };
  }
}
