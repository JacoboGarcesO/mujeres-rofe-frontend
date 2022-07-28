import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OptionModel } from '../models/option.model';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class ResourcesState {
  private canCloseModal$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private documents$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private ethnicGroups$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private maritalStatus$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private sustenting$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private familyCore$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private familyIncome$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private housingType$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private education$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private stratum$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private templates$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);
  private disclosures$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      canCloseModal: this.factory.state(this.canCloseModal$),
      documents: this.factory.state(this.documents$),
      ethnicGroups: this.factory.state(this.ethnicGroups$),
      maritalStatus: this.factory.state(this.maritalStatus$),
      sustenting: this.factory.state(this.sustenting$),
      familyCore: this.factory.state(this.familyCore$),
      familyIncome: this.factory.state(this.familyIncome$),
      housingType: this.factory.state(this.housingType$),
      education: this.factory.state(this.education$),
      stratum: this.factory.state(this.stratum$),
      templates: this.factory.state(this.templates$),
      disclosures: this.factory.state(this.disclosures$),
    };
  }

}
