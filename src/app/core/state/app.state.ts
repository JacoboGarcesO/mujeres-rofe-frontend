import { Injectable } from '@angular/core';
import { LocationsState } from './locations.state';
import { UsersState } from './users.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(
    private usersState: UsersState,
    private locationsState: LocationsState,
  ) { }

  get users() { return this.usersState.store(); }
  get locations() { return this.locationsState.store(); }
}
