import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ToApiForgotPasswordMapper } from '../mappers/to-api-forgot-password.mapper';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {

  constructor(
    private httpService: HttpService,
    private toApiForgotPasswordMapper: ToApiForgotPasswordMapper,
  ) { }

  forgotPassword(value: string): Observable<string> {
    const url = URL_RESOURCE.forgotPassword;
    const body = this.toApiForgotPasswordMapper.map(value);
    return this.httpService.post(url, body).pipe(
      map((response: any) => response?.message),
    );
  }
}
