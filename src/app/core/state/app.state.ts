import { Injectable } from '@angular/core';
import { HobbiesState } from './hobbies.state';
import { LocationsState } from './locations.state';
import { NotificationsState } from './notifications.state';
import { UsersState } from './users.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(
    private usersState: UsersState,
    private locationsState: LocationsState,
    private hobbiesState: HobbiesState,
    private notificationsState: NotificationsState,
  ) { }

  get users() { return this.usersState.store(); }
  get locations() { return this.locationsState.store(); }
  get hobbies() { return this.hobbiesState.store(); }
  get notifications() { return this.notificationsState.store(); }
}
