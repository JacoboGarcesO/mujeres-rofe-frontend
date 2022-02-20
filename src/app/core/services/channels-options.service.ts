import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChannelEnum, fromChannelEnum } from '../enums/channel.enum';
import { OptionModel } from '../models/option.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelsOptionsService {
  
  getChannels(): Observable<OptionModel[]> {
    const channels = [
      { 
        label: 'Red',
        id: fromChannelEnum(ChannelEnum.network),
      },
      { 
        label: 'Oportunidades', 
        id: fromChannelEnum(ChannelEnum.opportunities),
      },
      { 
        label: 'Formación', 
        id: fromChannelEnum(ChannelEnum.training),
      },
      { 
        label: 'Emprendimiento', 
        id: fromChannelEnum(ChannelEnum.business),
      },
      { 
        label: 'Contácto', 
        id: fromChannelEnum(ChannelEnum.contact),
      },
    ];

    return of(channels);
  }
}
