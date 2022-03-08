import { Injectable } from '@angular/core';
import { Subscription, Observable, tap } from 'rxjs';
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
  //#endregion

  //#region Private Methods
  private storeRequests(requests: FormRequestModel[]): void {
    this.state.formRequest.requests.set(requests);
  }
  //#endregion
}
