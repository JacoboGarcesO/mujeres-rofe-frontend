import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentUserModel } from '../models/current-user.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class NotificationsState {
  private notification$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      notification: this.factory.state(this.notification$),
    };
  }

}
