import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentUserModel } from '../models/current-user.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class UsersState {
  private currentUser$: BehaviorSubject<CurrentUserModel> = new BehaviorSubject(null as unknown as CurrentUserModel);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      currentUser: this.factory.state(this.currentUser$),
    };
  }

}
