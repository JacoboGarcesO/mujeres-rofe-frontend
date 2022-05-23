import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiToOptionMapper } from '../mappers/api-to-option.mapper';
import { OptionModel } from '../models/option.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {

  constructor(
    private httpService: HttpService,
    private apiToOptionMapper: ApiToOptionMapper,
  ) { }

  getStates(): Observable<OptionModel[]> {
    const url = URL_RESOURCE.getStates;
    return this.httpService.get(url).pipe(
      map(({ states }: any) => this.apiToOptionMapper.map(states, '_id')),
    );
  }

  getCitiesByState(stateId: string): Observable<OptionModel[]> {
    const url = URL_RESOURCE.getCitiesByState(stateId);
    return this.httpService.get(url).pipe(
      map(({ cities }: any) => this.apiToOptionMapper.map(cities, '_id')),
    );
  }

  getCities(): Observable<OptionModel[]> {
    const url = URL_RESOURCE.getCities;
    return this.httpService.post(url, '').pipe(
      map(({ cities }: any) => this.apiToOptionMapper.map(cities, '_id')),
    );
  }
}
