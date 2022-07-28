import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { RegisterContainerFacade } from './register-container.facade';

@Component({
  selector: 'mr-register-container',
  templateUrl: './register-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainerComponent implements OnInit, OnDestroy {
  public states$: Observable<OptionModel[]>;
  public cities$: Observable<OptionModel[]>;
  public hobbies$: Observable<OptionModel[]>;
  public documents$: Observable<OptionModel[]>;
  public education$: Observable<OptionModel[]>;
  public ethnicGroups$: Observable<OptionModel[]>;
  public familyCore$: Observable<OptionModel[]>;
  public familyIncome$: Observable<OptionModel[]>;
  public housingType$: Observable<OptionModel[]>;
  public maritalStatus$: Observable<OptionModel[]>;
  public stratum$: Observable<OptionModel[]>;
  public sustenting$: Observable<OptionModel[]>;
  public disclosures$: Observable<OptionModel[]>;

  constructor(private facade: RegisterContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadStates();
    this.facade.loadHobbies();
    this.facade.loadResources();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyStates();
    this.facade.destroyCitiesByState();
    this.facade.destroyHobbies();
    this.facade.destroyResources();
    this.facade.destroySubscriptions();
  }

  handleCreateUser(user: UserModel): void {
    this.facade.createUser(user); 
  }

  handleLoadCities(stateId: string): void {
    this.facade.loadCitiesByState(stateId);
  }

  private initializeSubscriptions(): void {
    this.states$ = this.facade.states$();
    this.cities$ = this.facade.cities$();
    this.hobbies$ = this.facade.hobbies$();
    this.documents$ = this.facade.documents$(); 
    this.education$ = this.facade.education$(); 
    this.ethnicGroups$ = this.facade.ethnicGroups$(); 
    this.familyCore$ = this.facade.familyCore$(); 
    this.familyIncome$ = this.facade.familyIncome$(); 
    this.housingType$ = this.facade.housingType$(); 
    this.maritalStatus$ = this.facade.maritalStatus$(); 
    this.stratum$ = this.facade.stratum$(); 
    this.sustenting$ = this.facade.sustenting$(); 
    this.disclosures$ = this.facade.disclosures$(); 
  }
}
