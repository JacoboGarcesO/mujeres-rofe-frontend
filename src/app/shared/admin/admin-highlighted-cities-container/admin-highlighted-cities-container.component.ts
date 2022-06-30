import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { AdminHighlightedCitiesContainerFacade } from './admin-highlighted-cities-container.facade';

@Component({
  selector: 'mr-admin-highlighted-cities-container',
  templateUrl: './admin-highlighted-cities-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminHighlightedCitiesContainerComponent implements OnInit, OnDestroy { 
  public canCloseModal$: Observable<boolean>;
  public highlightedCities$: Observable<OptionModel[]>;
  public cities$: Observable<OptionModel[]>;
  public states$: Observable<OptionModel[]>;

  constructor(private facade: AdminHighlightedCitiesContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadHighlightedCities();
    this.facade.loadStates();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
    this.facade.destroyHighlightedCities();
    this.facade.destroyCitiesByState();
    this.facade.destroyStates();
  }

  handleCreateHighlightedCity(city: string): void {
    this.facade.createCity(city);
    this.facade.destroyCitiesByState();
  }

  handleDeleteHighlightedCities(cityId: string): void {
    this.facade.deleteCity(cityId);
  }

  handleSelectState(stateId: string): void {
    this.facade.destroyCanCloseModal();
    this.facade.loadCitiesByState(stateId);
  }

  private initializeSubscriptions(): void {
    this.canCloseModal$ = this.facade.canCloseModal$();
    this.highlightedCities$ = this.facade.highlightedCities$();
    this.cities$ = this.facade.cities$();
    this.states$ = this.facade.states$();
  }
}
