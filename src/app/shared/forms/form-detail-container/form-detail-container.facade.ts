import { Injectable } from '@angular/core';
import { catchError, EMPTY, finalize, Observable, Subscription, tap } from 'rxjs';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { FormRequestsService } from 'src/app/core/services/form-requests.service';
import { RequestsService } from 'src/app/core/services/requests.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class FormDetailContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: FormRequestsService,
    private requestService: RequestsService,
  ) { }

  //#region Observables 
  form$(): Observable<FormRequestModel> {
    return this.state.formRequest.currentForm.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadForm(formId: string): void {
    this.subscriptions.add(
      this.service.getFormRequest(formId).pipe(
        tap(this.storeForm.bind(this)),
      ).subscribe(),
    );
  }

  destroyForm(): void {
    this.state.formRequest.currentForm.set(null);
  }

  saveRequest(form: FormRequestModel): void {
    const callback = this.loadForm.bind(this, form.id);
    const currentUser = this.state.users.currentUser.snapshot();
    
    this.notify('init');
    this.subscriptions.add(
      this.requestService.createRequest(form, currentUser).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );

  }
  //#endregion

  //#region Private Methods
  private storeForm(form: FormRequestModel): void {
    this.state.formRequest.currentForm.set(form);
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
