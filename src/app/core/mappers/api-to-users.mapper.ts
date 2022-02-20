import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToUsersMapper {
  map(response: any): UserModel[] {
    if (!response?.users) { return []; }

    return response?.users?.map(this.getUser.bind(this));
  }

  private getUser(user: any): UserModel {
    return {
      id: user?._id,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      rol: user?.rol,
      isPremium: user?.isPremium,
      document: user?.document,
      image: user?.image,
      description: user?.description,
      location:  {
        city: user?.location?.city,
        state: user?.location?.state,
      },
      instagram: user?.socialsNetworks?.[0]?.url,
      hobbies: this.getHobbies(user?.hobbies),
      phoneNumber: user?.phoneNumber,
    };
  }

  private getHobbies(hobbies: any[]): string[] {
    return hobbies.map((hobbie) => hobbie?.name);
  }
}
