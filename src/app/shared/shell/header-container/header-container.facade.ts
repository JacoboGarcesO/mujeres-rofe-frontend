import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { CurrentUserService } from 'src/app/core/services/current-user.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class HeaderContainerFacade {

  constructor(
    private state: AppState,
    private service: CurrentUserService,
  ) { }

  //#region Observables 
  currentUser$(): Observable<CurrentUserModel> {
    return this.state.users.currentUser.$();
  }
  //#endregion

  //#region Public methods
  logoutUser(): void {
    this.state.users.currentUser.set(null as unknown as CurrentUserModel);
    this.service.logoutUser();
  }
  //#endregion

  //#region Private methods
  //#endregion
}
