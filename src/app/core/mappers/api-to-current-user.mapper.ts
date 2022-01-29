import { Injectable } from '@angular/core';
import { CurrentUserModel } from '../models/current-user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToCurrentUserMapper {
  map(response: any): CurrentUserModel {
    return {
      email: response?.user?.email,
      id: response?.user?._id,
      rol: response?.user?.rol,
      token: response?.token,
    };
  }
}
