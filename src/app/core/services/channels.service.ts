import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { ChannelModel } from '../models/channel.model';
import { HttpService } from './generals/http.service';
import { ApiToChannelsMapper } from '../mappers/api-to-channels.mapper';
import { ToApiChannelMapper } from '../mappers/to-api-channel.mapper';
import { URL_RESOURCE } from '../resources/url.resource';
import { StorageService } from './generals/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  constructor(
    private httpService: HttpService,
    private apiToChannelsMapper: ApiToChannelsMapper,
    private toApiChannelMapper: ToApiChannelMapper,
    private storageService: StorageService,
  ) { }

  getChannels(): Observable<ChannelModel[]> {
    const url = URL_RESOURCE.channels;
    return this.httpService.get(url).pipe(
      map((response) => this.apiToChannelsMapper.mapChannels(response)),
      tap((channels) => this.storageService.set<ChannelModel[]>('CHANNELS', channels)),
    );
  }

  createChannel(channel: ChannelModel): Observable<unknown> {
    const url = URL_RESOURCE.channels;
    const request = this.toApiChannelMapper.map(channel);
    return this.httpService.postFile(url, request);
  }

  updateChannel(channel: ChannelModel): Observable<string> {
    const url =  URL_RESOURCE.channels;
    const formData = this.toApiChannelMapper.map(channel);
    return this.httpService.putFile(url, formData).pipe(
      map((response: any) => response?.channels?.[0]?._id),
    );
  }

  deleteChannel(channelId: string): Observable<any> {
    const url = URL_RESOURCE.deleteChannel(channelId);
    return this.httpService.delete(url);
  }
}
