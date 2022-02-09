import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { HomeContentContainerFacade } from './home-content-container.facade';

@Component({
  selector: 'mr-home-content-container',
  templateUrl: './home-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContentContainerComponent implements OnInit, OnDestroy {
  public currentUser$: Observable<CurrentUserModel>;
  public states$: Observable<OptionModel[]>;
  public cities$: Observable<OptionModel[]>;
  public hobbies$: Observable<OptionModel[]>;

  constructor(private facade: HomeContentContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadStates();
    this.facade.loadHobbies();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyStates();
    this.facade.destroyCitiesByState();
  }

  handleUpdateUser(user: CurrentUserModel): void {
    this.facade.updateUser(user);
  }

  handleLoadCitiesByState(stateId: string): void {
    this.facade.loadCitiesByState(stateId);
  }

  private initializeSubscriptions(): void {
    this.currentUser$ = this.facade.currentUser$();
    this.states$ = this.facade.states$();
    this.cities$ = this.facade.cities$();
    this.hobbies$ = this.facade.hobbies$();
  }
}
