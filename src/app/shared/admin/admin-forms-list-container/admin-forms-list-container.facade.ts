import { Injectable } from '@angular/core';
import { Subscription, Observable, EMPTY, tap, finalize, catchError } from 'rxjs';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { FormRequestsService } from 'src/app/core/services/form-requests.service';
import { AppState } from '../../../core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AdminFormsListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: FormRequestsService,
  ) { }

  //#region Observables
  canCloseModal$(): Observable<boolean> {
    return this.state.resources.canCloseModal.$();
  }

  forms$(): Observable<FormRequestModel[]> {
    return this.state.formRequest.forms.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  createForm(form: FormRequestModel): void {
    this.notify('init');
    const callback = this.loadForms.bind(this);

    this.subscriptions.add(
      this.service.createFormRequest(form).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  loadForms(): void {
    this.subscriptions.add(
      this.service.getFormRequests().pipe(
        tap(this.storeForms.bind(this)),
      ).subscribe(),
    );
  }

  destroyForms(): void {
    this.state.formRequest.forms.set(null);
  }
  //#endregion

  //#region Private Methods
  private storeCanCloseModal(value: boolean): void {
    this.state.resources.canCloseModal.set(value);
  }

  private storeForms(forms: FormRequestModel[]): void {
    this.state.formRequest.forms.set(forms);
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
    if (!!callback && !(callback instanceof Observable)) { setTimeout(() => callback(), 2000); }
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
