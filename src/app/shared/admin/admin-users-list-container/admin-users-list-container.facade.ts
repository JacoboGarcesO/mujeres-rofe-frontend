
import { Injectable } from '@angular/core';
import { catchError, EMPTY, finalize, merge, Observable, of, Subscription, tap } from 'rxjs';
import { FilterModel } from 'src/app/core/models/filter.model';
import { UserModel } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';
import { OptionModel } from '../../../core/models/option.model';
import { ExcelService } from '../../../core/services/excel.service';
import { HobbiesService } from '../../../core/services/hobbies.service';
import { LocationsService } from '../../../core/services/locations.service';
import { ResourcesService } from '../../../core/services/resources.service';
import { AppState } from '../../../core/state/app.state';

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
    private resourcesService: ResourcesService,
    private excelService: ExcelService,
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

  canCloseModal$(): Observable<boolean> {
    return this.state.resources.canCloseModal.$();
  }

  currentUserToUpdate$(): Observable<UserModel> {
    return this.state.users.currentUserToUpdate.$();
  }

  disclosures$(): Observable<OptionModel[]> {
    return this.state.resources.disclosures.$();
  }

  filter$(): Observable<FilterModel> {
    return this.state.resources.filter.$();
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
    this.state.resources.filter.set(null);
  }

  setFilter(filter?: FilterModel): void {
    this.state.resources.filter.set({
      from: filter?.from ? (filter?.from - 1) * 10 : 0,
      limit: filter?.limit ?? 10,
      sort: { firstName: 'asc'},
      term: filter?.term,
      total: filter?.total,
      currentPage: filter?.currentPage ?? 1,
    });

    this.loadUsers();
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

  destroyUsers(): void {
    this.state.users.users.set(null);
  }

  loadUser(userId: string): void {
    this.destroyUser();
    const user = this.state.users.users.snapshot()?.find((user) => user.id === userId);
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
        catchError(({ error }) => this.notify('error', null, error?.error?.message)),
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

  downloadUsers(): void {
    const filter = this.state.resources.filter.snapshot();

    this.subscriptions.add(
      this.excelService.exportUsersToExcel(filter).subscribe(),
    );
  }
  //#endregion

  //#region Private Methods
  private loadUsers(): void {
    const filter = this.state.resources.filter.snapshot();
    this.subscriptions.add(
      this.usersService.getUsers(filter).pipe(
        tap(this.storeUsers.bind(this)),
      ).subscribe(),
    );
  }

  private store(entity: string, options: OptionModel[]): void {
    this.state.locations?.[entity].set(options);
  }

  private storeUsers({ users, filter }: { users: UserModel[]; filter: FilterModel }): void {
    const filterSate = this.state.resources.filter.snapshot();
    this.state.users.users.set(users);
    this.state.resources.filter.set({ ...filter, currentPage: filterSate.currentPage });
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
    message?: string,
  ): Observable<never> {
    const messages = {
      init: 'Estamos procesando su solicitud',
      complete: 'Su solicitud se completó con éxito',
      error: 'El proceso que solicitaste falló, inténtalo de nuevo más tarde',
    };

    this.state.notifications.notification.set(typeof message === 'string' ? message : messages[key]);

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
