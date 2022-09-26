import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { map, Observable } from 'rxjs';
import { URL_RESOURCE } from '../resources/url.resource';
import { OptionModel } from '../models/option.model';
import { ApiToOptionMapper } from '../mappers/api-to-option.mapper';
import { ToApiHighlightedCitiesMapper } from '../mappers/to-api-highlighted-cities.mapper';

@Injectable({
  providedIn: 'root',
})
export class HighlightedCitiesService {
  constructor(
    private httpService: HttpService,
    private apiToOptionMapper: ApiToOptionMapper,
    private toApiHighlightedCitiesMapper: ToApiHighlightedCitiesMapper,
  ) { }

  getAll(): Observable<OptionModel[]> {
    const url = URL_RESOURCE.highlightedCities;
    return this.httpService.get(url).pipe(
      map(({ result }) => this.apiToOptionMapper.map(result, '_id')),
    );
  }

  create(city: OptionModel): Observable<string> {
    const url = URL_RESOURCE.highlightedCities;
    const body = this.toApiHighlightedCitiesMapper.map(city);

    return this.httpService.post(url, body).pipe(
      map(({ result }) => result?._id),
    );
  }

  delete(cityId: string): Observable<string> {
    const url = URL_RESOURCE.deleteHighlightedCity(cityId);
    return this.httpService.delete(url).pipe(
      map(({ result }) => result._id),
    );
  }
}
