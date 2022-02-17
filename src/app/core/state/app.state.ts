import { Injectable } from '@angular/core';
import { ChannelsState } from './channels.state';
import { HobbiesState } from './hobbies.state';
import { LocationsState } from './locations.state';
import { NotificationsState } from './notifications.state';
import { UsersState } from './users.state';
import { NoticesState } from './notices.state';
import { TabsState } from './tabs.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(
    private usersState: UsersState,
    private locationsState: LocationsState,
    private hobbiesState: HobbiesState,
    private notificationsState: NotificationsState,
    private channelsState: ChannelsState,
    private noticesState: NoticesState,
    private tabsState: TabsState,
  ) { }

  get users() { return this.usersState.store(); }
  get locations() { return this.locationsState.store(); }
  get hobbies() { return this.hobbiesState.store(); }
  get notifications() { return this.notificationsState.store(); }
  get channels() { return this.channelsState.store(); }
  get notices() { return this.noticesState.store(); }
  get tabs() { return this.tabsState.store(); }
}
