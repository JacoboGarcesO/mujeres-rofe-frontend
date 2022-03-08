import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { map, Observable } from 'rxjs';
import { NoticeModel } from '../models/notice.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { ApiToNoticesMapper } from '../mappers/api-to-notices.mapper';
import { ToApiNoticeMapper } from '../mappers/to-api-notice.mapper';
import { ApiToNoticeMapper } from '../mappers/api-to-notice.mapper';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  constructor(
    private httpService: HttpService,
    private apiToNoticesMapper: ApiToNoticesMapper,
    private apiToNoticeMapper: ApiToNoticeMapper,
    private toApiNoticeMapper: ToApiNoticeMapper,
  ) { }

  getNotices(): Observable<NoticeModel[]> {
    const url = URL_RESOURCE.notices;
    return this.httpService.get(url).pipe(
      map((response) => this.apiToNoticesMapper.map(response)),
    );
  }

  getNoticeById(id: string): Observable<NoticeModel> {
    const url = URL_RESOURCE.noticeById(id);
    return this.httpService.get(url).pipe(
      map((response) => this.apiToNoticeMapper.map(response)),
    );
  }

  getNoticesByChannel(channel: string): Observable<NoticeModel[]> {
    const url = URL_RESOURCE.noticesByChannel(channel);
    return this.httpService.get(url).pipe(
      map((response) => this.apiToNoticesMapper.map(response)),
    );
  }

  createNotice(notice: NoticeModel): Observable<unknown> {
    const url = URL_RESOURCE.notices;
    const request = this.toApiNoticeMapper.map(notice);
    return this.httpService.postFile(url, request);
  }

  updateNotice(notice: NoticeModel): Observable<string> {
    const url =  URL_RESOURCE.notices;
    const formData = this.toApiNoticeMapper.map(notice);
    return this.httpService.putFile(url, formData).pipe(
      map((response: any) => response?.notices?.[0]?._id),
    );
  }

  deleteNotice(noticeId: string): Observable<any> {
    const url = URL_RESOURCE.deleteNotice(noticeId);
    return this.httpService.delete(url);
  }
}
