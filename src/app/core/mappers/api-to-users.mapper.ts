import { Injectable } from '@angular/core';
import { CurrentUserModel } from '../models/current-user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToUsersMapper {
  map(response: any): CurrentUserModel[] {
    if (!response?.users) { return []; }
  
    return response?.users?.map(this.getUser.bind(this)); 
  }

  private getUser(user: any): CurrentUserModel {
    return {
      id: user?._id,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      nameComplete: user?.nameComplete,
      rol: user?.rol,
      token: user?.token,
      message: user?.message,
      isPending: user?.isPending,
      document: user?.document,
      image: user?.image,
      description: user?.description,
      location: user?.location,
      instagram: user?.instagram,
      hobbies: user?.hobbies,
      phoneNumber: user?.phoneNumber,
    };
  }
}
