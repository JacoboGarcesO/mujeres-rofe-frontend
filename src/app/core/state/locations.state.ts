import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OptionModel } from '../models/option.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class LocationsState {
  private states$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private cities$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private highlightedCities$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      cities: this.factory.state(this.cities$),
      states: this.factory.state(this.states$),
      highlightedCities: this.factory.state(this.highlightedCities$),
    };
  }

}
