import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OptionModel } from '../models/option.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class HobbiesState {
  private hobbies$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      hobbies: this.factory.state(this.hobbies$),
    };
  }

}
