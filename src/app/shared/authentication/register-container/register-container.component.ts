import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { OptionModel } from 'src/app/core/models/option.model';
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

  constructor(private facade: RegisterContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadStates();
    this.facade.loadHobbies();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyStates();
    this.facade.destroyCitiesByState();
    this.facade.destroySubscriptions();
  }

  handleCreateUser(user: CurrentUserModel): void {
    this.facade.createUser(user); 
  }

  handleLoadCities(stateId: string): void {
    this.facade.loadCitiesByState(stateId);
  }

  private initializeSubscriptions(): void {
    this.states$ = this.facade.states$();
    this.cities$ = this.facade.cities$();
    this.hobbies$ = this.facade.hobbies$();
  }
}
