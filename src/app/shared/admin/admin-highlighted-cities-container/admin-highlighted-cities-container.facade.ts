import { Injectable } from '@angular/core';
import { Subscription, Observable, EMPTY, tap, finalize, catchError } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { HighlightedCitiesService } from 'src/app/core/services/highlighted-cities.service';
import { LocationsService } from 'src/app/core/services/locations.service';
import { AppState } from '../../../core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AdminHighlightedCitiesContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: HighlightedCitiesService,
    private locationsService: LocationsService,
  ) { }

  //#region Observables
  canCloseModal$(): Observable<boolean> {
    return this.state.resources.canCloseModal.$();
  }

  highlightedCities$(): Observable<OptionModel[]> {
    return this.state.locations.highlightedCities.$();
  }

  cities$(): Observable<OptionModel[]> {
    return this.state.locations.cities.$();
  }

  states$(): Observable<OptionModel[]> {
    return this.state.locations.states.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  destroyCanCloseModal(): void {
    this.state.resources.canCloseModal.set(null);
  }

  createCity(cityId: string): void {
    this.notify('init');
    const city = this.state.locations.cities.snapshot().find((city) => city.id === cityId);
    const callback = this.loadHighlightedCities.bind(this);

    this.subscriptions.add(
      this.service.create(city).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  deleteCity(cityId: string): void {
    this.notify('init');
    const callback = this.loadHighlightedCities.bind(this);
  
    this.subscriptions.add(
      this.service.delete(cityId).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  loadHighlightedCities(): void {
    this.subscriptions.add(
      this.service.getAll().pipe(
        tap(this.storeHighlightedCities.bind(this)),
      ).subscribe(),
    );
  }

  destroyHighlightedCities(): void {
    this.state.locations.highlightedCities.set(null);
  }

  loadStates(): void {
    this.destroyStates();
    this.subscriptions.add(
      this.locationsService.getStates().pipe(
        tap(this.state.locations.states.set.bind(this)),
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
        tap(this.state.locations.cities.set.bind(this)),
      ).subscribe(),
    );
  }

  destroyCitiesByState(): void {
    this.state.locations.cities.set(null);
  }
  //#endregion

  //#region Private Methods
  private storeCanCloseModal(value: boolean): void {
    this.state.resources.canCloseModal.set(value);
  }

  private storeHighlightedCities(cities: OptionModel[]): void {
    this.state.locations.highlightedCities.set(cities);
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
