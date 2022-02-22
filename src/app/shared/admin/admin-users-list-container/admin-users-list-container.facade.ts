import { Injectable } from '@angular/core';
import { Subscription, Observable, tap, EMPTY, catchError, finalize } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from '../../../core/state/app.state';
import { LocationsService } from '../../../core/services/locations.service';
import { HobbiesService } from '../../../core/services/hobbies.service';
import { OptionModel } from '../../../core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private usersService: UsersService,
    private locationsService: LocationsService,
    private habbiesService: HobbiesService,
  ) { }

  //#region Observables
  users$(): Observable<UserModel[]> {
    return this.state.users.users.$();
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

  canCloseModal$(): Observable<boolean> {
    return this.state.resources.canCloseModal.$();
  }

  currentUserToUpdate$(): Observable<UserModel> {
    return this.state.users.currentUserToUpdate.$();
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

  destroyCanCloseModal(): void {
    this.state.resources.canCloseModal.set(null);
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

  loadUsers(): void {
    this.subscriptions.add(
      this.usersService.getUsers().pipe(
        tap(this.storeUsers.bind(this)),
      ).subscribe(),
    );
  }

  destroyUsers(): void {
    this.state.users.users.set(null);
  }

  loadUser(userId: string): void {
    this.destroyUser();
    const user = this.state.users.users.snapshot().find((user) => user.id === userId);
    this.state.users.currentUserToUpdate.set(user);
  }

  destroyUser(): void {
    this.state.users.currentUserToUpdate.set(null);
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

  createUser(user: UserModel): void {
    const cities = this.state.locations.cities.snapshot();
    const callback = this.loadUsers.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.usersService.create(user, cities).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  updateUser(user: UserModel): void {
    const cities = this.state.locations.cities.snapshot();
    const callback = this.loadUsers.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.usersService.update(user, cities).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  deleteUser(userId: string): void {
    const callback = this.loadUsers.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.usersService.delete(userId).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion

  //#region Private Methods
  private store(entity: string, options: OptionModel[]): void {
    this.state.locations?.[entity].set(options);
  }

  private storeUsers(users: UserModel[]): void {
    this.state.users.users.set(users);
  }

  private storeHobbies(hobbies: OptionModel[]): void {
    this.state.hobbies.hobbies.set(hobbies);
  }

  private storeCanCloseModal(value: boolean): void {
    this.state.resources.canCloseModal.set(value);
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
