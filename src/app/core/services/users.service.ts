import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiToOptionMapper } from '../mappers/api-to-option.mapper';
import { ToApiUsersMapper } from '../mappers/to-api-users.mapper';
import { CurrentUserModel } from '../models/current-user.model';
import { OptionModel } from '../models/option.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private httpService: HttpService,
    private toApiUsersMapper: ToApiUsersMapper,
  ) { }

  updateUser(user: CurrentUserModel): Observable<any> {
    const url =  URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user);
    return this.httpService.putFile(url, formData);
  }
}
