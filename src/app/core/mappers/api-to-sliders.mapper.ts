import { Injectable } from '@angular/core';
import { SlideModel } from '../models/slide.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToSliderMapper {
  map(slides: any[]): SlideModel[] {
    return slides?.map((slide)=> ({
      id: slide?._id,
      title: slide?.title,
      image: slide?.image,
      url: slide?.url,
    }));
  }
}
