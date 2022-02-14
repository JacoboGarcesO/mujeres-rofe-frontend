import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class RequestNotificationsContainerFacade {

  constructor(
    private state: AppState,
  ) { }

  //#region Observables
  notification$(): Observable<string> {
    return this.state.notifications.notification.$();
  }
  //#endregion

  //#region Public methods
  destroyNotification(): void {
    this.state.notifications.notification.set(null);
  }
  //#endregion
}
