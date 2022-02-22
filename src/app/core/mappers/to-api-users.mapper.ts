import { Injectable } from '@angular/core';
import { UserLocationModel } from '../models/locations.model';
import { OptionModel } from '../models/option.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiUsersMapper {
  map(user: UserModel, cities: OptionModel[]): any {
    const formData = new FormData();
    const socialNetworks = this.getSocialNetworks(user?.instagram, user?.facebook);
    const image = this.getImage(user.image);
    const hobbies = this.getHobbies(user.hobbies);
    const location = this.getLocation(user.location, cities);

    formData.append('id', user.id);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('rol', 'user');
    formData.append('isPremium', 'false');
    formData.append('email', user.email);
    formData.append('description', user.description);
    formData.append('hobbies', hobbies);
    formData.append('phoneNumber', `${user.phoneNumber}`);
    formData.append('socialsNetworks', socialNetworks);
    formData.append('document', user?.document);
    formData.append('image', image);
    formData.append('location', JSON.stringify(location));

    return formData;
  }

  private getSocialNetworks(instagram: string, facebook: string): string {
    const socialNetwork = [{ name: 'instagram', url: instagram }, { name: 'facebook', url: facebook }];
    return JSON.stringify(socialNetwork);
  }

  private getImage(image: any): File {
    return image.file as File;
  }

  private getHobbies(hobbies: string[]): any {
    if (!hobbies) { return '[]'; }

    return JSON.stringify(hobbies.map((hobbie) => ({ name: hobbie })));
  }

  private getLocation(location: UserLocationModel, cities: OptionModel[]): any {
    const cityName = cities.find((city) => city.id === location.city).label;    
    return { ...location, cityName };
  }
}
