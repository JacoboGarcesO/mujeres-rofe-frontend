import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class HomeContentContainerFacade {

  constructor(
    private state: AppState,
  ) { }

  //#region Observables 
  currentUser$(): Observable<CurrentUserModel> {
    return this.state.users.currentUser.$();
  }
  //#endregion

  //#region Observables 
  update(user: CurrentUserModel): void {
    console.log(user);
  }
  //#endregion
}
