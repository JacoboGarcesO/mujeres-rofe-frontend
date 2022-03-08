import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { map, Observable } from 'rxjs';
import { URL_RESOURCE } from '../resources/url.resource';
import { ApiToFormRequestsMapper } from '../mappers/api-to-form-requests.mapper';
import { FormRequestModel } from '../models/form-requests.model';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(
    private httpService: HttpService,
    private apiToFormRequestMapper: ApiToFormRequestsMapper,
  ) { }

  getRequests(): Observable<FormRequestModel[]> {
    const url = URL_RESOURCE.requests;
    return this.httpService.get(url).pipe(
      map((response) => this.apiToFormRequestMapper.map(response)),
    );
  }
}
