import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { UserCredentialsModel } from 'src/app/core/models/user-credentials.model';
import { CurrentUserService } from 'src/app/core/services/current-user.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class UserLoginContainerFacade {
  private subscriptions: Subscription | undefined;

  constructor(
    private state: AppState,
    private service: CurrentUserService,
    private router: Router,
  ) { }

  //#region Observables 
  currentUser$(): Observable<CurrentUserModel> {
    return this.state.users.currentUser.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions?.unsubscribe();
  }

  handleLogin(userCredentials: UserCredentialsModel): void {
    this.subscriptions?.add(
      this.service.loginUser(userCredentials).pipe(
        tap(this.manageLogin.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private methods
  private manageLogin(currentUser: CurrentUserModel): void {
    if (currentUser?.id) {
      this.router.navigateByUrl('/');
    }
  
    this.state.users.currentUser.set(currentUser);
  }
  //#endregion
}
