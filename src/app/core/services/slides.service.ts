import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiToSliderMapper } from '../mappers/api-to-sliders.mapper';
import { ToApiSlideMapper } from '../mappers/to-api-slide.mapper';
import { SlideModel } from '../models/slide.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class SlidesService {

  constructor(
    private httpService: HttpService,
    private apiToSliderMapper: ApiToSliderMapper,
    private toApiSlideMapper: ToApiSlideMapper,
  ) { }

  getAll(): Observable<SlideModel[]> {
    const url = URL_RESOURCE.slides;
    return this.httpService.get(url).pipe(
      map((response: any) => this.apiToSliderMapper.map(response?.slides ?? [])),
    );
  }

  create(slide: SlideModel): Observable<string> {
    const url = URL_RESOURCE.slides;
    const body = this.toApiSlideMapper.map(slide);
    return this.httpService.postFile(url, body).pipe(
      map((response: any) => response?._id),
    );
  }

  update(slide: SlideModel): Observable<string> {
    const url = URL_RESOURCE.slides;
    const body = this.toApiSlideMapper.map(slide);
    return this.httpService.putFile(url, body).pipe(
      map((response: any) => response?._id),
    );
  }

  delete(slideId: string): Observable<string> {
    const url = `${URL_RESOURCE.slides}/${slideId}`;
    return this.httpService.delete(url).pipe(
      map((response: any) => response?._id),
    );
  }
}
