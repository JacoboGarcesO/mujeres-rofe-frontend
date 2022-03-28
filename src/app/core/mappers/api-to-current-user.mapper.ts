import { Injectable } from '@angular/core';
import { toRolEnum } from '../enums/rols.enum';
import { CurrentUserModel } from '../models/current-user.model';
import { UserModel } from '../models/user.model';
import { MessageUtil } from '../utils/message.util';

@Injectable({
  providedIn: 'root',
})
export class ApiToCurrentUserMapper {
  map(response: any): CurrentUserModel {
    return {
      user: this.getUser(response?.user),
      token: response?.token,
      message: MessageUtil.trasnformToMessage(response?.message),
    };
  }

  getUser(user: any): UserModel {
    if (!user?._id) { return null; }

    return {
      id: user?._id,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      rol: toRolEnum(user?.rol),
      isPremium: user?.isPremium,
      documentNumber: user?.documentNumber,
      image: user?.image,
      description: user?.description,
      location: {
        city: user?.location?.city,
        state: user?.location?.state,
        cityName: user?.location?.cityName,
      },
      instagram: this.getSocialNetwork(user?.socialsNetworks, 'instagram'),
      facebook: this.getSocialNetwork(user?.socialsNetworks, 'facebook'),
      hobbies: this.getHobbies(user?.hobbies),
      phoneNumber: user?.phoneNumber,
      documentType: user?.documentType,
      maritalStatus: user?.maritalStatus,
      address: user?.address,
      age: user?.age,
      familyCore: user?.familyCore,
      familyIncome: user?.familyIncome,
      housingType: user?.housingType,
      education: user?.education,
      stratum: user?.stratum,
      promocionalCode: user?.promocionalCode,
      disclosure: user?.disclosure,
      ethnicGroup: this.getHobbies(user?.ethnicGroup),
      sustaining: this.getHobbies(user?.sustaining),
      documentImage: user?.documentImage,
      creationDate: user?.creationDate,
    };
  }

  private getHobbies(hobbies: any[]): string[] {
    return hobbies?.map((hobbie) => hobbie?.name);
  }

  private getSocialNetwork(socials: any[], social: string): string {
    return socials?.find((_) => _.name === social)?.url;
  }
}
