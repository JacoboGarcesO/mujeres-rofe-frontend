import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { HttpService } from './generals/http.service';
import { StorageService } from './generals/storage.service';
import { ApiToCurrentUserMapper } from '../mappers/api-to-current-user.mapper';
import { ToApiCredentialsMapper } from '../mappers/to-api-credentials.mapper';
import { CurrentUserModel } from '../models/current-user.model';
import { UserCredentialsModel } from '../models/user-credentials.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { UserModel } from '../models/user.model';
import { ApiToUsersMapper } from '../mappers/api-to-users.mapper';
import { ToApiUsersMapper } from '../mappers/to-api-users.mapper';
import { OptionModel } from '../models/option.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private apiToCurrentUserMapper: ApiToCurrentUserMapper,
    private toApiCredentialsMapper: ToApiCredentialsMapper,
    private toApiUsersMapper: ToApiUsersMapper,
    private apiToUsersMapper: ApiToUsersMapper,
  ) { }

  getCurrentUser(): Observable<CurrentUserModel> {
    const currentUser = this.storageService.get<CurrentUserModel>('CURRENT_USER');   
    return of(currentUser);
  }

  loginUser(userCredentials: UserCredentialsModel): Observable<CurrentUserModel | any> {
    const url = URL_RESOURCE.userLogin;
    const credentials = this.toApiCredentialsMapper.map(userCredentials);
    const body = JSON.stringify(credentials);
    return this.httpService.post(url, body).pipe(
      map((currentUser) => this.apiToCurrentUserMapper.map(currentUser)),
    );
  }

  update(user: UserModel, cities: OptionModel[]): Observable<UserModel> {
    const url =  URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user, cities);
    return this.httpService.putFile(url, formData).pipe(
      map((response: any) => this.apiToUsersMapper.getUser(response?.users?.[0])),
      tap((user) => this.storageService.set<UserModel>('CURRENT_USER', user)),
    );
  }

  logoutUser(): void {
    this.storageService.remove('CURRENT_USER');
    this.storageService.remove('TOKEN');
    this.storageService.remove('CHANNELS');
  }
}
