import { Injectable } from '@angular/core';
import { UserLocationModel } from '../models/locations.model';
import { MediaModel } from '../models/media.model';
import { OptionModel } from '../models/option.model';
import { SlideModel } from '../models/slide.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiSlideMapper {
  map(slide: SlideModel): any {
    const formData = new FormData();
    formData.append('title', slide?.title);
    formData.append('id', slide?.id);
    formData.append('url', slide?.url);
    formData.append('image', slide?.image?.file);
    formData.append('imageEncoded', this.getImage(slide?.image));
    
    return formData;
  }

  private getImage(image: MediaModel): string {
    const media = {
      _id: image.id,
      url:image.url,
    };

    return JSON.stringify(media);
  }
}
