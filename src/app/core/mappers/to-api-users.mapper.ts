import { Injectable } from '@angular/core';
import { CurrentUserModel } from '../models/current-user.model';
import { MediaModel } from '../models/media.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiUsersMapper {
  map(user: CurrentUserModel): any {
    const formData = new FormData();
    const socialNetworks = this.getSocialNetworks(user.instagram);
    const image = this.getImage(user.image);
    const hobbies = this.getHobbies(user.hobbies);

    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('rol', user.rol);
    formData.append('isPending', 'false');
    formData.append('email', user.email);
    formData.append('description', user.description);
    formData.append('id', user.id);
    formData.append('hobbies', hobbies);
    formData.append('phoneNumber', `${user.phoneNumber}`);
    formData.append('socialsNetworks', socialNetworks);
    formData.append('image', image);
    formData.append('location', JSON.stringify(user.location));

    return formData;
  }

  private getSocialNetworks(instagram: string): string {
    const socialNetwork = [{ name: 'instagram', url: instagram }];
    return JSON.stringify(socialNetwork);
  }

  private getImage(image: any): File {
    return image.file as File;
  }

  private getHobbies(hobbies: string[]): any {
    return JSON.stringify(hobbies.map((hobbie) => ({name: hobbie})));
  }
}
