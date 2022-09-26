import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiToUsersMapper } from '../mappers/api-to-users.mapper';
import { ToApiUsersMapper } from '../mappers/to-api-users.mapper';
import { FilterModel } from '../models/filter.model';
import { OptionModel } from '../models/option.model';
import { UserModel } from '../models/user.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private httpService: HttpService,
    private toApiUsersMapper: ToApiUsersMapper,
    private apiToUsersMapper: ApiToUsersMapper,
  ) { }

  getUsers(filter: FilterModel): Observable<UserModel[]> {
    const url = URL_RESOURCE.paginatedUsers;
    const body = JSON.stringify(filter);
    return this.httpService
      .post(url, body)
      .pipe(map(({ result }) => this.apiToUsersMapper.map(result)));
  }

  create(user: UserModel, cities: OptionModel[]): Observable<any> {
    const url = URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user, cities);
    return this.httpService
      .postFile(url, formData);
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
        map(({ result }: any) =>
          this.apiToUsersMapper.getUser(result),
        ),
      );
  }

  getTotalUsers(): Observable<number> {
    const url = URL_RESOURCE.totalUsers;
    return this.httpService.get(url).pipe(map(({ result }: any) => result));
  }
}
