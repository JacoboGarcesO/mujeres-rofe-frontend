import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { map, Observable, tap } from 'rxjs';
import { NoticeModel } from '../models/notice.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { ApiToNoticesMapper } from '../mappers/api-to-notices.mapper';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  constructor(
    private httpService: HttpService,
    private apiToNoticesMapper: ApiToNoticesMapper,
  ) { }

  getNotices(): Observable<NoticeModel[]> {
    const url = URL_RESOURCE.getNotices;
    return this.httpService.get(url).pipe(
      map((response) => this.apiToNoticesMapper.map(response)),
    );
  }
}
