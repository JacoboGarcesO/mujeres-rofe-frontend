import { Injectable } from '@angular/core';
import { Subscription, Observable, tap, EMPTY, catchError, finalize } from 'rxjs';
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

  loadUsers(): void {
    this.subscriptions.add(
      this.usersService.getUsers().pipe(
        tap(this.storeUsers.bind(this)),
      ).subscribe(),
    );
  }

  destroyUsers(): void {
    this.state.users.users.set(null);
  }

  deleteUser(user: CurrentUserModel): void {
    const callback = this.loadUsers.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.usersService.delete(user.id).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );    
  }
  //#endregion

  //#region Private Methods
  private storeUsers(users: CurrentUserModel[]): void {
    this.state.users.users.set(users);
  }

  private notify(
    key: 'init' | 'complete' | 'error',
    callback: () => void = null,
  ): Observable<never> {
    const messages = {
      init: 'Estamos procesando su solicitud',
      complete: 'Su solicitud se completó con éxito',
      error: 'El proceso que solicitaste falló, inténtalo de nuevo más tarde',
    };

    this.state.notifications.notification.set(messages[key]);

    // eslint-disable-next-line angular/timeout-service
    if (!!callback && !(callback instanceof Observable)) { setTimeout(() => callback(), 500); }
    return EMPTY;
  }

  private notifyClose(callback: () => void = null): void {
    if (this.canClose()) {
      // eslint-disable-next-line angular/timeout-service
      setTimeout(() => {
        this.state.notifications.notification.set(null);
        if (callback) { callback(); }
      }, 1000);
    }
  }

  private canClose(): boolean {
    const lastMessage = this.state.notifications.notification.snapshot();
    const errorMessage = 'La solicitud falló';
    return !lastMessage?.startsWith(errorMessage);
  }
  //#endregion
}
