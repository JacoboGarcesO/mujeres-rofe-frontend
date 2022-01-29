import { Injectable } from '@angular/core';
import { UserCredentialsModel } from '../models/user-credentials.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiCredentialsMapper {
  map(credentials: UserCredentialsModel): any {
    return {
      email: credentials.email,
      password: credentials.password,
    };
  }
}
