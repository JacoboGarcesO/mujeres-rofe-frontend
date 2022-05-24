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

  constructor(private facade: AdminHighlightedCitiesContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadHighlightedCities();
    this.facade.loadCities();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroyHighlightedCities();
    this.facade.destroyCities();
    this.facade.destroySubscriptions();
  }

  handleCreateHighlightedCity(city: string): void {
    this.facade.createCity(city);
  }

  handleDeleteHighlightedCities(cityId: string): void {
    this.facade.deleteCity(cityId);
  }

  private initializeSubscriptions(): void {
    this.canCloseModal$ = this.facade.canCloseModal$();
    this.highlightedCities$ = this.facade.highlightedCities$();
    this.cities$ = this.facade.cities$();
  }
}
