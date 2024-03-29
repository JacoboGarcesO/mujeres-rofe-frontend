import { Injectable } from '@angular/core';
import { catchError, EMPTY, finalize, Observable, merge, Subscription, tap } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { CurrentUserService } from 'src/app/core/services/current-user.service';
import { HobbiesService } from 'src/app/core/services/hobbies.service';
import { LocationsService } from 'src/app/core/services/locations.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
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
    private currentUserService: CurrentUserService,
    private locationsService: LocationsService,
    private habbiesService: HobbiesService,
    private resourcesService: ResourcesService,
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

  documents$(): Observable<OptionModel[]> {
    return this.state.resources.documents.$();
  }

  education$(): Observable<OptionModel[]> {
    return this.state.resources.education.$();
  }

  ethnicGroups$(): Observable<OptionModel[]> {
    return this.state.resources.ethnicGroups.$();
  }

  familyCore$(): Observable<OptionModel[]> {
    return this.state.resources.familyCore.$();
  }

  familyIncome$(): Observable<OptionModel[]> {
    return this.state.resources.familyIncome.$();
  }

  housingType$(): Observable<OptionModel[]> {
    return this.state.resources.housingType.$();
  }

  maritalStatus$(): Observable<OptionModel[]> {
    return this.state.resources.maritalStatus.$();
  }

  stratum$(): Observable<OptionModel[]> {
    return this.state.resources.stratum.$();
  }

  sustenting$(): Observable<OptionModel[]> {
    return this.state.resources.sustenting.$();
  }

  disclosures$(): Observable<OptionModel[]> {
    return this.state.resources.disclosures.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadResources(): void {
    this.subscriptions.add(
      merge(
        this.resourcesService.getDocuments().pipe(
          tap(this.state.resources.documents.set.bind(this)),
        ),
        this.resourcesService.getEducation().pipe(
          tap(this.state.resources.education.set.bind(this)),
        ),
        this.resourcesService.getEthnicGroups().pipe(
          tap(this.state.resources.ethnicGroups.set.bind(this)),
        ),
        this.resourcesService.getFamilyCore().pipe(
          tap(this.state.resources.familyCore.set.bind(this)),
        ),
        this.resourcesService.getFamilyIncome().pipe(
          tap(this.state.resources.familyIncome.set.bind(this)),
        ),
        this.resourcesService.getHousingType().pipe(
          tap(this.state.resources.housingType.set.bind(this)),
        ),
        this.resourcesService.getMaritalStatus().pipe(
          tap(this.state.resources.maritalStatus.set.bind(this)),
        ),
        this.resourcesService.getStratum().pipe(
          tap(this.state.resources.stratum.set.bind(this)),
        ),
        this.resourcesService.getSustenting().pipe(
          tap(this.state.resources.sustenting.set.bind(this)),
        ),
        this.resourcesService.getDisclosures().pipe(
          tap(this.state.resources.disclosures.set.bind(this)),
        ),
      ).subscribe(),
    );
  }

  destroyResources(): void {
    this.state.resources.documents.set(null);
    this.state.resources.education.set(null);
    this.state.resources.ethnicGroups.set(null);
    this.state.resources.familyCore.set(null);
    this.state.resources.familyIncome.set(null);
    this.state.resources.housingType.set(null);
    this.state.resources.maritalStatus.set(null);
    this.state.resources.stratum.set(null);
    this.state.resources.sustenting.set(null);
    this.state.resources.disclosures.set(null);
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
      this.currentUserService.update(user, cities).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCurrentUser.bind(this)),
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

  private storeCurrentUser(user: UserModel): void {
    this.state.users.currentUser.set(user);
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
      }, 3500);
    }
  }

  private canClose(): boolean {
    const lastMessage = this.state.notifications.notification.snapshot();
    const errorMessage = 'La solicitud falló';
    return !lastMessage?.startsWith(errorMessage);
  }
  //#endregion
}
