import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToUsersMapper {
  map(result: any[]): UserModel[] {    
    if (!result?.length) { return []; }

    return result?.map(this.getUser.bind(this));
  }

  getUser(user: any): UserModel {
    return {
      id: user?._id,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      rol: user?.rol,
      isPremium: user?.isPremium,
      documentNumber: user?.documentNumber,
      image: {
        id: user?.image?._id,
        url: user?.image?.url,
        type: user?.image?.type,
      },
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
      documentImage: {
        id: user?.documentImage?._id,
        url: user?.documentImage?.url,
        type: user?.documentImage?.type,
      },
      creationDate: user?.creationDate,
      isAccept: user?.hasAcceptTermsAndConditions ?? true,
    };
  }

  private getHobbies(hobbies: any[]): string[] {
    return hobbies?.map((hobbie) => hobbie?.name);
  }

  private getSocialNetwork(socials: any[], social: string): string {
    return socials?.find((_) => _.name === social)?.url;
  }
}
