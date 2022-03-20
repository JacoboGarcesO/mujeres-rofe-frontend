import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';
import { map, Observable } from 'rxjs';
import { URL_RESOURCE } from '../resources/url.resource';
import { ApiToFormRequestsMapper } from '../mappers/api-to-form-requests.mapper';
import { FormRequestModel } from '../models/form-requests.model';
import { ToApiFormRequestsMapper } from '../mappers/to-api-form-request.mapper';
import { OptionModel } from '../models/option.model';
import { ApiToOptionMapper } from '../mappers/api-to-option.mapper';

@Injectable({
  providedIn: 'root',
})
export class FormRequestsService {
  constructor(
    private httpService: HttpService,
    private apiToFormRequestMapper: ApiToFormRequestsMapper,
    private toApiFormRequestMapper: ToApiFormRequestsMapper,
    private apiToOptionMapper: ApiToOptionMapper,
  ) { }

  getFormRequests(): Observable<FormRequestModel[]> {
    const url = URL_RESOURCE.forms;
    return this.httpService.get(url).pipe(
      map((response) => this.apiToFormRequestMapper.map(response, 'forms')),
    );
  }

  getFormRequest(formId: string): Observable<FormRequestModel> {
    const url = `${URL_RESOURCE.forms}/${formId}`;
    return this.httpService.get(url).pipe(
      map((response: any) => this.apiToFormRequestMapper.getRequest(response?.forms?.[0])),
    );
  }

  getFormRequestsOptions(): Observable<OptionModel[]> {
    const url = URL_RESOURCE.forms;
    return this.httpService.get(url).pipe(
      map((response: any) => this.apiToOptionMapper.map(response?.forms, '_id', 'title')),
    );
  }

  createFormRequest(form: FormRequestModel): Observable<string> {
    const url = URL_RESOURCE.forms;
    const body = this.toApiFormRequestMapper.map(form);
    
    return this.httpService.post(url, body).pipe(
      map((response: any) => response.forms?.[0]._id),
    );
  }

  updateFormRequest(form: FormRequestModel): Observable<string> {
    const url = URL_RESOURCE.forms;
    const body = this.toApiFormRequestMapper.map(form);
    return this.httpService.put(url, body).pipe(
      map((response: any) => response.forms?.[0]._id),
    );
  }

  deleteFormRequest(formId: string): Observable<string> {
    const url = `${URL_RESOURCE.forms}/${formId}`;
    return this.httpService.delete(url).pipe(
      map((response: any) => response.forms?.[0]._id),
    );
  }
}
