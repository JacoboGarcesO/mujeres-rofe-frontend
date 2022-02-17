import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';
import { TabModel } from '../models/tab.model';

@Injectable({
  providedIn: 'root',
})
export class TabsState {
  private tabs$: BehaviorSubject<TabModel[]> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      tabs: this.factory.state(this.tabs$),
    };
  }
}
