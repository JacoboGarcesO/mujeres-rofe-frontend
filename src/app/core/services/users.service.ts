import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiToUserMapper } from '../mappers/api-to-user.mapper';
import { ToApiUsersMapper } from '../mappers/to-api-users.mapper';
import { CurrentUserModel } from '../models/current-user.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private httpService: HttpService,
    private toApiUsersMapper: ToApiUsersMapper,
    private apiToUserMapper: ApiToUserMapper,
  ) { }

  create(user: CurrentUserModel): Observable<any> {
    const url =  URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user);
    return this.httpService.postFile(url, formData).pipe(
      map((response: any) => this.apiToUserMapper.map(response)),
    );
  }
}
