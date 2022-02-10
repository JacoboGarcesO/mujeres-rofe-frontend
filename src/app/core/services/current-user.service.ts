import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpService } from './generals/http.service';
import { StorageService } from './generals/storage.service';
import { ApiToCurrentUserMapper } from '../mappers/api-to-current-user.mapper';
import { ToApiCredentialsMapper } from '../mappers/to-api-credentials.mapper';
import { CurrentUserModel } from '../models/current-user.model';
import { UserCredentialsModel } from '../models/user-credentials.model';
import { URL_RESOURCE } from '../resources/url.resource';
import { ToApiUsersMapper } from '../mappers/to-api-users.mapper';
import { ApiToCurrentUserUpdatedMapper } from '../mappers/api-tocurrent-user-updated.mapper';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private apiToCurrentUserMapper: ApiToCurrentUserMapper,
    private apiToCurrentUserupdatedMapper: ApiToCurrentUserUpdatedMapper,
    private toApiUsersMapper: ToApiUsersMapper,
    private toApiCredentialsMapper: ToApiCredentialsMapper,
  ) { }

  getCurrentUser(): Observable<CurrentUserModel> {
    const currentUser = this.storageService.get<CurrentUserModel>('CURRENT_USER');   
    return of(currentUser);
  }

  loginUser(userCredentials: UserCredentialsModel): Observable<CurrentUserModel> {
    const url = URL_RESOURCE.userLogin;
    const credentials = this.toApiCredentialsMapper.map(userCredentials);
    const body = JSON.stringify(credentials);
    return this.httpService.post(url, body).pipe(
      map((currentUser) => this.apiToCurrentUserMapper.map(currentUser)),
      tap((currentUser) => this.storageService.set<CurrentUserModel>('CURRENT_USER', currentUser)),
    );
  }

  updateUser(user: CurrentUserModel, token: string): Observable<any> {
    const url =  URL_RESOURCE.users;
    const formData = this.toApiUsersMapper.map(user);
    return this.httpService.putFile(url, formData).pipe(
      map((response: any) => this.apiToCurrentUserupdatedMapper.map(response, token)),
      tap((currentUser) => this.storageService.set<CurrentUserModel>('CURRENT_USER', currentUser)),
    );
  }

  logoutUser(): void {
    this.storageService.remove('CURRENT_USER');
  }
}
