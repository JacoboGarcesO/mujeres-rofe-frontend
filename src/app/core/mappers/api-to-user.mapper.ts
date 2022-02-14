import { Injectable } from '@angular/core';
import { toRolEnum } from '../enums/rols.enum';
import { CurrentUserModel } from '../models/current-user.model';
import { MessageUtil } from '../utils/message.util';

@Injectable({
  providedIn: 'root',
})
export class ApiToUserMapper {
  map(response: any, token?: string): CurrentUserModel {
    return {
      email: response?.users?.[0]?.email,
      id: response?.users?.[0]?._id,
      nameComplete: `${response?.users?.[0]?.firstName} ${response?.users?.[0]?.lastName}`,
      firstName: response?.users?.[0]?.firstName,
      lastName: response?.users?.[0]?.lastName,
      rol: toRolEnum(response?.users?.[0]?.rol),
      isPending: response?.users?.[0]?.isPending,
      token,
      image: {
        id: response?.users?.[0]?.image?._id,
        url: response?.users?.[0]?.image?.url,
      },
      message: MessageUtil.trasnformToMessage(response?.message),
    };
  }
}
