import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { ForgotPasswordService } from 'src/app/core/services/forgot-password.service';
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
        catchError(({ error }: HttpErrorResponse) => error.status ? this.notify('error', null) : this.notify('internalError', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private methods
  private notify(
    key: 'init' | 'complete' | 'error' | 'internalError',
    callback: () => void = null,
  ): Observable<never> {
    const messages = {
      init: 'Estamos procesando su solicitud...',
      complete: '¡Revisa tu correo, allí encontrarás tus credenciales de ingreso!',
      error: 'El correo que ingresaste no está registrado.',
      internalError: 'El proceso que solicitaste falló, por favor inténtalo de nuevo más tarde.',
    };

    this.state.notifications.notification.set(messages[key]);

    // eslint-disable-next-line angular/timeout-service
    if (!!callback && !(callback instanceof Observable)) { setTimeout(() => callback(), 3500); }
    return EMPTY;
  }

  private notifyClose(callback: () => void = null): void {
    if (this.canClose()) {
      // eslint-disable-next-line angular/timeout-service
      setTimeout(() => {
        this.state.notifications.notification.set(null);
        if (callback) { callback(); }
      }, 4000);
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
