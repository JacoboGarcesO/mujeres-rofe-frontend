import { Injectable } from '@angular/core';
import { UsersState } from './users.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(private usersState: UsersState) { }

  get users() { return this.usersState.store(); }
}
