import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { map, Observable } from 'rxjs';
import { NoticeModel } from '../models/notice.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { ApiToNoticesMapper } from '../mappers/api-to-notices.mapper';
import { ToApiNoticeMapper } from '../mappers/to-api-notice.mapper';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  constructor(
    private httpService: HttpService,
    private apiToNoticesMapper: ApiToNoticesMapper,
    private toApiNoticeMapper: ToApiNoticeMapper,
  ) { }

  getNotices(): Observable<NoticeModel[]> {
    const url = URL_RESOURCE.notices;
    return this.httpService.get(url).pipe(
      map((response) => this.apiToNoticesMapper.map(response)),
    );
  }

  createNotice(notice: NoticeModel): Observable<unknown> {
    const url = URL_RESOURCE.notices;
    const request = this.toApiNoticeMapper.map(notice);
    return this.httpService.postFile(url, request);
  }
}
