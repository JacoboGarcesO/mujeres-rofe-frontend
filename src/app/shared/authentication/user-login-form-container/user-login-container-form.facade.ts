import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { UserCredentialsModel } from 'src/app/core/models/user-credentials.model';
import { UserModel } from 'src/app/core/models/user.model';
import { CurrentUserService } from 'src/app/core/services/current-user.service';
import { StorageService } from 'src/app/core/services/generals/storage.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class UserLoginContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: CurrentUserService,
    private storageService: StorageService,
    private router: Router,
  ) { }

  //#region Observables 
  currentUser$(): Observable<UserModel> {
    return this.state.users.currentUser.$();
  }

  formNotification$(): Observable<string> {
    return this.state.notifications.formNotification.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions?.unsubscribe();
  }

  destroyFormNotification(): void {
    this.state.notifications.formNotification.set(null);
  }

  handleLogin(userCredentials: UserCredentialsModel): void {
    this.subscriptions?.add(
      this.service.loginUser(userCredentials).pipe(
        tap(console.log),
        tap(this.manageLogin.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private methods
  private manageLogin(currentUser: CurrentUserModel): void {
    if (!currentUser?.user?.id) { return this.state.notifications.formNotification.set(currentUser?.message); }

    this.router.navigateByUrl('/');
    this.state.users.currentUser.set(currentUser.user);
    this.storageService.set<UserModel>('CURRENT_USER', currentUser?.user);
    this.storageService.set<string>('TOKEN', currentUser?.token);

    // eslint-disable-next-line angular/timeout-service
    setTimeout(this.state.notifications.formNotification.set.bind(this, null), 3000);
  }
  //#endregion
}
