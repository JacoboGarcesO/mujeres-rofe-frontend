import { Injectable } from '@angular/core';
import { Subscription, Observable, tap, EMPTY, finalize, catchError } from 'rxjs';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { RequestsService } from 'src/app/core/services/requests.service';
import { AppState } from '../../../core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AdminRequestsListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: RequestsService,
  ) { }

  //#region Observables
  requests$(): Observable<FormRequestModel[]> {
    return this.state.formRequest.requests.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadRequests(): void {
    this.subscriptions.add(
      this.service.getRequests().pipe(
        tap(this.storeRequests.bind(this)),
      ).subscribe(),
    );
  }

  destroyRequests(): void {
    this.state.formRequest.requests.set(null);
  }

  deleteRequest(requestId: string): void {
    const callback = this.loadRequests.bind(this);
    this.notify('init');
    this.subscriptions.add(
      this.service.deleteRequest(requestId).pipe(
        tap(this.destroyRequests.bind(this)),
        tap(this.notify.bind(this, 'complete', callback)),
        catchError(this.notify.bind(this, 'error')),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private Methods
  private storeRequests(requests: FormRequestModel[]): void {
    this.state.formRequest.requests.set(requests);
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
    if (!!callback && !(callback instanceof Observable)) { setTimeout(() => callback(), 1000); }
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
  //#endregion
}
