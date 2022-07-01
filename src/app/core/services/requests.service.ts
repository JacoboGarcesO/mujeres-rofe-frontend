import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { map, Observable } from 'rxjs';
import { URL_RESOURCE } from '../resources/url.resource';
import { ApiToFormRequestsMapper } from '../mappers/api-to-form-requests.mapper';
import { FormRequestModel } from '../models/form-requests.model';
import { ToApiRequestsMapper } from '../mappers/to-api-request.mapper';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(
    private httpService: HttpService,
    private apiToFormRequestMapper: ApiToFormRequestsMapper,
    private toApiRequestMapper: ToApiRequestsMapper,
  ) { }

  getRequests(): Observable<FormRequestModel[]> {
    const url = URL_RESOURCE.requests;
    return this.httpService.get(url).pipe(
      map((response) => this.apiToFormRequestMapper.map(response, 'requests')),
    );
  }
  
  createRequest(form: FormRequestModel, currentUser: UserModel): Observable<string> | any {
    const url = URL_RESOURCE.requests;
    const body = this.toApiRequestMapper.map(form, currentUser);    
    return this.httpService.postFile(url, body).pipe(
      map((response: any) => response?.requests?.[0]?._id),
    );
  }

  deleteRequest(requestId: string): Observable<unknown> {
    const url = URL_RESOURCE.deleteRequest(requestId);
    return this.httpService.delete(url);
  }
}
