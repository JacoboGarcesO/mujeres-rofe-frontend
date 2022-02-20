import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentUserModel } from '../models/current-user.model';
import { UserModel } from '../models/user.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class UsersState {
  private currentUser$: BehaviorSubject<CurrentUserModel> = new BehaviorSubject(null);
  private currentUserToUpdate$: BehaviorSubject<UserModel> = new BehaviorSubject(null);
  private users$: BehaviorSubject<UserModel[]> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      currentUser: this.factory.state(this.currentUser$),
      users: this.factory.state(this.users$),
      currentUserToUpdate: this.factory.state(this.currentUserToUpdate$),
    };
  }

}
