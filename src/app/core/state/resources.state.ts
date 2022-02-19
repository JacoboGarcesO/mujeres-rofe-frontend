import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class ResourcesState {
  private canCloseModal$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      canCloseModal: this.factory.state(this.canCloseModal$),
    };
  }

}
