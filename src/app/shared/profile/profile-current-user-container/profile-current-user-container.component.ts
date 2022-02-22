import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { ProfileCurrentUserContainerFacade } from './profile-current-user-container.facade';

@Component({
  selector: 'mr-profile-current-user-container',
  templateUrl: './profile-current-user-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCurrentUserContainerComponent implements OnInit, OnDestroy {
  public user$: Observable<UserModel>;
  public states$: Observable<OptionModel[]>;
  public cities$: Observable<OptionModel[]>;
  public hobbies$: Observable<OptionModel[]>;
  
  constructor(
    private facade: ProfileCurrentUserContainerFacade,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const { userId } = this.route.snapshot.params;
    this.facade.initSubscriptions();
    this.facade.loadUser(userId);
    this.facade.loadStates();
    this.facade.loadHobbies();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyUser();
    this.facade.destroyStates();
    this.facade.destroyCitiesByState();
    this.facade.destroyHobbies();
    this.facade.destroySubscriptions();
  }

  handleUpdateUser(user: UserModel): void {
    this.facade.updateUser(user); 
  }

  handleLoadCities(stateId: string): void {
    this.facade.loadCitiesByState(stateId);
  }

  private initializeSubscriptions(): void {
    this.user$ = this.facade.user$();
    this.states$ = this.facade.states$();
    this.cities$ = this.facade.cities$();
    this.hobbies$ = this.facade.hobbies$();
  }
}
