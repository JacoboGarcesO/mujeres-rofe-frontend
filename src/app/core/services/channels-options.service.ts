import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiToOptionMapper } from '../mappers/api-to-option.mapper';
import { OptionModel } from '../models/option.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelsOptionsService {

  constructor(
    private httpService: HttpService,
    private apiToOptionMapper: ApiToOptionMapper,
  ) { }

  getChannels(): Observable<OptionModel[]> {
    const url = URL_RESOURCE.channels;
    return this.httpService.get(url).pipe(
      map((response: any) => this.apiToOptionMapper.map(response?.channels, 'type')),
    );
  }
}
