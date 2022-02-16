import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { StorageService } from './generals/storage.service';
import { map, Observable, of } from 'rxjs';
import { NoticeModel } from '../models/notice.model';
import { URL_RESOURCE } from '../resources/url.resource';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
  ) { }

  getNotices(): Observable<NoticeModel[]> {
    const url = URL_RESOURCE.getNotices;
    return this.httpService.get(url);
  }
}
