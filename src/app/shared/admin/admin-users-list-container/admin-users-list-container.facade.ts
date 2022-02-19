import { Injectable } from '@angular/core';
import { Subscription, Observable, tap } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from '../../../core/state/app.state';
import { CurrentUserModel } from '../../../core/models/current-user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private usersService: UsersService,
  ) { }

  //#region Observables
  users$(): Observable<CurrentUserModel[]> {
    return this.state.users.users.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadUsres(): void {
    this.subscriptions.add(
      this.usersService.getUsers().pipe(
        tap(this.storeUsers.bind(this)),
      ).subscribe(),
    );
  }

  destroyUsers(): void {
    this.state.users.users.set(null);
  }
  //#endregion

  //#region Private Methods
  private storeUsers(users: CurrentUserModel[]): void {
    this.state.users.users.set(users);
  }
  //#endregion
}
