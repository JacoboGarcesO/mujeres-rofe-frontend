import { Injectable } from '@angular/core';
import { catchError, EMPTY, finalize, Observable, Subscription, tap } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { HobbiesService } from 'src/app/core/services/hobbies.service';
import { LocationsService } from 'src/app/core/services/locations.service';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ProfileCurrentUserContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private userService: UsersService,
    private locationsService: LocationsService,
    private habbiesService: HobbiesService,
  ) { }

  //#region Observables
  user$(): Observable<UserModel> {
    return this.state.users.currentUserToUpdate.$();
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

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
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

  loadUser(userId: string): void {
    this.subscriptions.add(
      this.userService.getById(userId).pipe(
        tap(this.storeUser.bind(this)),
      ).subscribe(),
    );
  }

  destroyUser(): void {
    this.state.users.currentUserToUpdate.set(null);
  }

  updateUser(user: UserModel): void {    
    const cities = this.state.locations.cities.snapshot();
    const callback = this.loadUser.bind(this, user.id);

    this.notify('init');
    this.subscriptions.add(
      this.userService.update(user, cities).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private Methods
  private storeUser(user: UserModel): void {
    this.state.users.currentUserToUpdate.set(user);
  }

  private store(entity: string, options: OptionModel[]): void {
    this.state.locations?.[entity].set(options);
  }

  private storeHobbies(hobbies: OptionModel[]): void {
    this.state.hobbies.hobbies.set(hobbies);
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
