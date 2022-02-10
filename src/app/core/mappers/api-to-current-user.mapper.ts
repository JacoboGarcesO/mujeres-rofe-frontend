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
      nameComplete: `${response?.user?.firstName} ${response?.user?.lastName}`,
      firstName: response?.user?.firstName,
      lastName: response?.user?.lastName,
      rol: toRolEnum(response?.user?.rol),
      token: response?.token,
      isPending: response?.user?.isPending,
      image: {
        id: response?.user?.image?._id,
        url: response?.user?.image?.url,
      },
      message: MessageUtil.trasnformToMessage(response?.message),
    };
  }
}
