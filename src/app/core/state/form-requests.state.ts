import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormRequestModel } from '../models/form-requests.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class FormRequestState {
  private requests$: BehaviorSubject<FormRequestModel[]> = new BehaviorSubject(null);
  private forms$: BehaviorSubject<FormRequestModel[]> = new BehaviorSubject(null);
  private currentForm$: BehaviorSubject<FormRequestModel> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      requests: this.factory.state(this.requests$),
      forms: this.factory.state(this.forms$),
      currentForm: this.factory.state(this.currentForm$),
    };
  }

}
