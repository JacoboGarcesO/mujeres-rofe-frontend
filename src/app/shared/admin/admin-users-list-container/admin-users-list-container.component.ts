import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserModel } from '../../../core/models/current-user.model';
import { AdminUsersListContainerFacade } from './admin-users-list-container.facade';
import { OptionModel } from '../../../core/models/option.model';

@Component({
  selector: 'mr-admin-users-list-container',
  templateUrl: './admin-users-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersListContainerComponent implements OnInit, OnDestroy {
  public users$: Observable<CurrentUserModel[]>;
  public states$: Observable<OptionModel[]>;
  public cities$: Observable<OptionModel[]>;
  public hobbies$: Observable<OptionModel[]>;
  public canCloseModal$: Observable<boolean>;

  constructor(private facade: AdminUsersListContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadUsers();
    this.facade.loadHobbies();
    this.facade.loadStates();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyUsers();
    this.facade.destroyHobbies();
    this.facade.destroyStates();
    this.facade.destroyCanCloseModal();
    this.facade.destroyCitiesByState();
    this.facade.destroySubscriptions();
  }

  handleSelectState(stateId: string): void {
    this.facade.destroyCanCloseModal();
    this.facade.loadCitiesByState(stateId);
  }

  handleCreateUser(user: CurrentUserModel): void {
    this.facade.createUser(user);
  }

  handleDeleteUser(userId: string): void {
    this.facade.deleteUser(userId);
  }

  private initializeSubscriptions(): void {
    this.users$ = this.facade.users$();
    this.states$ = this.facade.states$();
    this.cities$ = this.facade.cities$();
    this.hobbies$ = this.facade.hobbies$();
    this.canCloseModal$ = this.facade.canCloseModal$();
  }
}
