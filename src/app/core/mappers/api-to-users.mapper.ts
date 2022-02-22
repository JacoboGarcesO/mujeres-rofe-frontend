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

  getUser(user: any): UserModel {
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
      instagram: this.getSocialNetwork(user?.socialsNetworks, 'instagram'),
      facebook: this.getSocialNetwork(user?.socialsNetworks, 'facebook'),
      hobbies: this.getHobbies(user?.hobbies),
      phoneNumber: user?.phoneNumber,
    };
  }

  private getHobbies(hobbies: any[]): string[] {
    return hobbies.map((hobbie) => hobbie?.name);
  }

  private getSocialNetwork(socials: any[], social: string): string {
    return socials.find((_)=> _.name === social).url;
  }
}
