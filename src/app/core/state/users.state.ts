import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class UsersState {
  private test$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      test: this.factory.state(this.test$),
    };
  }

}
