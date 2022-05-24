import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ChannelModel } from '../models/channel.model';
import { HttpService } from './generals/http.service';
import { ApiToChannelsMapper } from '../mappers/api-to-channels.mapper';
import { ToApiChannelMapper } from '../mappers/to-api-channel.mapper';
import { URL_RESOURCE } from '../resources/url.resource';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  constructor(
    private httpService: HttpService,
    private apiToChannelsMapper: ApiToChannelsMapper,
    private toApiChannelMapper: ToApiChannelMapper,
  ) { }

  getChannels(): Observable<ChannelModel[]> {
    const url = URL_RESOURCE.channels;
    return this.httpService.get(url).pipe(
      map((response) => this.apiToChannelsMapper.mapChannels(response)),
    );
  }
}
