import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { HobbiesService } from 'src/app/core/services/hobbies.service';
import { LocationsService } from 'src/app/core/services/locations.service';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class HomeContentContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private locationsService: LocationsService,
    private habbiesService: HobbiesService,
    private usersService: UsersService,
    // private userService: any,
  ) { }

  //#region Observables 
  currentUser$(): Observable<CurrentUserModel> {
    return this.state.users.currentUser.$();
  }

  cities$(): Observable<OptionModel[]> {
    return this.state.locations.cities.$();
  }

  states$(): Observable<OptionModel[]> {
    return this.state.locations.states.$();
  }

  hobbies$(): Observable<OptionModel[]> {
    return this.state.hobbies.hobbies.$();
  }
  //#endregion

  //#region Observables
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  loadStates(): void {
    this.destroyStates();
    this.subscriptions.add(
      this.locationsService.getStates().pipe(
        tap(this.store.bind(this, 'states')),
      ).subscribe(),
    );
  }

  destroyStates(): void {
    this.state.locations.states.set(null);
  }

  loadCitiesByState(stateId: string): void {
    this.destroyCitiesByState();
    this.subscriptions.add(
      this.locationsService.getCitiesByState(stateId).pipe(
        tap(this.store.bind(this, 'cities')),
      ).subscribe(),
    );
  }

  destroyCitiesByState(): void {
    this.state.locations.cities.set(null);
  }

  loadHobbies(): void {
    this.destroyHobbies();
    this.subscriptions.add(
      this.habbiesService.getHobbies().pipe(
        tap(this.storeHobbies.bind(this)),
      ).subscribe(),
    );
  }

  destroyHobbies(): void {
    this.state.hobbies.hobbies.set(null);
  }

  updateUser(user: CurrentUserModel): void {
    this.subscriptions.add(
      this.usersService.updateUser(user).pipe(

      ).subscribe(),
    );
  }
  //#endregion

  //#region Private Methods 
  private store(entity: string, states: OptionModel[]): void {
    this.state.locations?.[entity].set(states);
  }

  private storeHobbies(hobbies: OptionModel[]): void {
    this.state.hobbies.hobbies.set(hobbies);
  }
  //#endregion
}
