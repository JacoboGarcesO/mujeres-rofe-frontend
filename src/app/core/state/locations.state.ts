import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentUserModel } from '../models/current-user.model';
import { OptionModel } from '../models/option.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class LocationsState {
  private states$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null as unknown as OptionModel[]);
  private cities$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null as unknown as OptionModel[]);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      cities: this.factory.state(this.cities$),
      states: this.factory.state(this.states$),
    };
  }

}
