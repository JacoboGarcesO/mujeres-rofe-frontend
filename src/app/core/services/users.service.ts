import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ToApiUsersMapper } from '../mappers/to-api-users.mapper';
import { ApiToUsersMapper } from '../mappers/api-to-users.mapper';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';
import { UserModel, UserPaginatedModel } from '../models/user.model';
import { OptionModel } from '../models/option.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private httpService: HttpService,
    private toApiUsersMapper: ToApiUsersMapper,
    private apiToUsersMapper: ApiToUsersMapper,
  ) {}

  getUsers(): Observable<UserModel[]> {
    const url = URL_RESOURCE.users;
    return this.httpService
      .get(url)
      .pipe(map((response) => this.apiToUsersMapper.map(response)));
  }

  getUsersByCity(value: string): Observable<UserPaginatedModel> {
    const url = URL_RESOURCE.usersByCity(value);
    return this.httpService
      .get(url)
      .pipe(map((response) => this.apiToUsersMapper.mapPaginatedUsers(response)));
  }

  getUsersByName(value: string): Observable<UserPaginatedModel> {
    const url = URL_RESOURCE.usersByName(value);
    return this.httpService
      .get(url)
      .pipe(map((response) => this.apiToUsersMapper.mapPaginatedUsers(response)));
  }

  getPaginatedUsers(from: number): Observable<UserPaginatedModel> {
    const url = URL_RESOURCE.paginatedUsers(from);
    return this.httpService
      .get(url)
      .pipe(
        map((response) => this.apiToUsersMapper.mapPaginatedUsers(response)),
      );
  }

  create(user: UserModel, cities: OptionModel[]): Observable<string> {
    const url = URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user, cities);
    return this.httpService
      .postFile(url, formData)
      .pipe(map((response: any) => response?.users?.[0]?._id));
  }

  update(user: UserModel, cities: OptionModel[]): Observable<string> {
    const url = URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user, cities);
    return this.httpService
      .putFile(url, formData)
      .pipe(map((response: any) => response?.users?.[0]?._id));
  }

  delete(userId: string): Observable<any> {
    const url = URL_RESOURCE.deleteUser(userId);
    return this.httpService.delete(url);
  }

  getById(userId: string): Observable<UserModel> {
    const url = URL_RESOURCE.userById(userId);
    return this.httpService
      .get(url)
      .pipe(
        map((response: any) =>
          this.apiToUsersMapper.getUser(response.users?.[0]),
        ),
      );
  }
}
