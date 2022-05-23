import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { UserCredentialsModel } from 'src/app/core/models/user-credentials.model';
import { UserModel } from 'src/app/core/models/user.model';
import { CurrentUserService } from 'src/app/core/services/current-user.service';
import { ForgotPasswordService } from 'src/app/core/services/forgot-password.service';
import { StorageService } from 'src/app/core/services/generals/storage.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: ForgotPasswordService,
    private router: Router,
  ) { }

  //#region Observables 
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions?.unsubscribe();
  }

  handleForgotPassword(value: string): void {
    const callback = this.navigateToLogin.bind(this);

    this.notify('init');
    this.subscriptions?.add(
      this.service.forgotPassword(value).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private methods
  private notify(
    key: 'init' | 'complete' | 'error',
    callback: () => void = null,
  ): Observable<never> {
    const messages = {
      init: 'Estamos procesando su solicitud',
      complete: '¡Revisa tu correo, allí encontrarás tus credenciales de ingreso!',
      error: 'El correo que ingresaste no está registrado',
    };

    this.state.notifications.notification.set(messages[key]);

    // eslint-disable-next-line angular/timeout-service
    if (!!callback && !(callback instanceof Observable)) { setTimeout(() => callback(), 5000); }
    return EMPTY;
  }

  private notifyClose(callback: () => void = null): void {
    if (this.canClose()) {
      // eslint-disable-next-line angular/timeout-service
      setTimeout(() => {
        this.state.notifications.notification.set(null);
        if (callback) { callback(); }
      }, 5000);
    }
  }

  private canClose(): boolean {
    const lastMessage = this.state.notifications.notification.snapshot();
    const errorMessage = 'La solicitud falló';
    return !lastMessage?.startsWith(errorMessage);
  }

  private navigateToLogin(): void {
    this.router.navigateByUrl('/auth/login');
  }
  //#endregion
}
