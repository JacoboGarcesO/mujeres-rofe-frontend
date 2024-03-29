import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminUsersListContainerFacade } from './admin-users-list-container.facade';
import { OptionModel } from '../../../core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { FilterModel } from 'src/app/core/models/filter.model';

@Component({
  selector: 'mr-admin-users-list-container',
  templateUrl: './admin-users-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersListContainerComponent implements OnInit, OnDestroy {
  public users$: Observable<UserModel[]>;
  public filter$: Observable<FilterModel>;
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
  public userToUpdate$: Observable<UserModel>;
  public canCloseModal$: Observable<boolean>;
  public disclosures$: Observable<OptionModel[]>;

  constructor(private facade: AdminUsersListContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.setFilter();
    this.facade.loadHobbies();
    this.facade.loadStates();
    this.facade.loadResources();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyUsers();
    this.facade.destroyHobbies();
    this.facade.destroyStates();
    this.facade.destroyCanCloseModal();
    this.facade.destroyCitiesByState();
    this.facade.destroyUser();
    this.facade.destroyResources();
    this.facade.destroySubscriptions();
  }

  handleSelectState(stateId: string): void {
    this.facade.destroyCanCloseModal();
    this.facade.loadCitiesByState(stateId);
  }

  handleCreateUser(user: UserModel): void {
    this.facade.createUser(user);
  }

  handleUpdateUser(user: UserModel): void {
    this.facade.updateUser(user);
  }

  handleDeleteUser(userId: string): void {
    this.facade.deleteUser(userId);
  }

  handleLoadUserToUpdate(userId: string): void {
    this.facade.loadUser(userId);
  }

  handleDownloadUsers(): void {
    this.facade.downloadUsers();
  }

  filterUsers(filter: FilterModel): void {
    this.facade.setFilter(filter);
  }

  private initializeSubscriptions(): void {
    this.users$ = this.facade.users$();
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
    this.canCloseModal$ = this.facade.canCloseModal$();
    this.userToUpdate$ = this.facade.currentUserToUpdate$();
    this.disclosures$ = this.facade.disclosures$();
    this.filter$ = this.facade.filter$();
  }
}
