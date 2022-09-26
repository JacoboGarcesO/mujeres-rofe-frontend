import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiToCurrentUserMapper } from '../mappers/api-to-current-user.mapper';
import { ApiToUsersMapper } from '../mappers/api-to-users.mapper';
import { ToApiCredentialsMapper } from '../mappers/to-api-credentials.mapper';
import { ToApiUsersMapper } from '../mappers/to-api-users.mapper';
import { CurrentUserModel } from '../models/current-user.model';
import { OptionModel } from '../models/option.model';
import { UserCredentialsModel } from '../models/user-credentials.model';
import { UserModel } from '../models/user.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { HttpService } from './generals/http.service';
import { StorageService } from './generals/storage.service';

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
      map((result) => this.apiToCurrentUserMapper.map(result)),
    );
  }

  update(user: UserModel, cities: OptionModel[]): Observable<UserModel> {
    const url =  URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user, cities);
    return this.httpService.putFile(url, formData).pipe(
      map((response: any) => this.apiToUsersMapper.getUser(response?.result)),
      tap((user) => this.storageService.set<UserModel>('CURRENT_USER', user)),
    );
  }

  logoutUser(): void {
    this.storageService.remove('CURRENT_USER');
    this.storageService.remove('TOKEN');
    this.storageService.remove('CHANNELS');
  }
}
