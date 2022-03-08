import { Injectable } from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class HomeContentContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
  ) { }

  //#region Observables 
  currentUser$(): Observable<UserModel> {
    return this.state.users.currentUser.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }
  //#endregion
}
