import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ToApiUsersMapper } from '../mappers/to-api-users.mapper';
import { ApiToUsersMapper } from '../mappers/api-to-users.mapper';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private httpService: HttpService,
    private toApiUsersMapper: ToApiUsersMapper,
    private apiToUsersMapper: ApiToUsersMapper,
  ) { }

  getUsers(): Observable<UserModel[]> {
    const url =  URL_RESOURCE.users;
    return this.httpService.get(url).pipe(    
      map((response) => this.apiToUsersMapper.map(response)),
    );
  }

  create(user: UserModel): Observable<string> {
    const url =  URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user);
    return this.httpService.postFile(url, formData).pipe(
      map((response: any) => response?.users?.[0]?._id),
    );
  }

  update(user: UserModel): Observable<string> {
    const url =  URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user);
    return this.httpService.putFile(url, formData).pipe(
      map((response: any) => response?.users?.[0]?._id),
    );
  }

  delete(userId: string): Observable<any> {
    const url = URL_RESOURCE.deleteUser(userId);
    return this.httpService.delete(url);
  }
}
