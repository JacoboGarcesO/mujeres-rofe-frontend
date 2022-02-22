import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ProfileUserContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private userService: UsersService,
  ) { }

  //#region Observables
  user$(): Observable<UserModel> {
    return this.state.users.currentUserToUpdate.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadUser(userId: string): void {
    this.subscriptions.add(
      this.userService.getById(userId).pipe(
        tap(this.storeUser.bind(this)),
      ).subscribe(),
    );
  }

  destroyUser(): void {
    this.state.users.currentUserToUpdate.set(null);
  }

  //#endregion

  //#region Private Methods
  private storeUser(user: UserModel): void {
    this.state.users.currentUserToUpdate.set(user);
  }
  //#endregion
}
