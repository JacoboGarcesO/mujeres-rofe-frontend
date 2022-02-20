import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminUsersListContainerFacade } from './admin-users-list-container.facade';
import { OptionModel } from '../../../core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'mr-admin-users-list-container',
  templateUrl: './admin-users-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersListContainerComponent implements OnInit, OnDestroy {
  public users$: Observable<UserModel[]>;
  public states$: Observable<OptionModel[]>;
  public cities$: Observable<OptionModel[]>;
  public hobbies$: Observable<OptionModel[]>;
  public userToUpdate$: Observable<UserModel>;
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
    this.facade.destroyUser();
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

  private initializeSubscriptions(): void {
    this.users$ = this.facade.users$();
    this.states$ = this.facade.states$();
    this.cities$ = this.facade.cities$();
    this.hobbies$ = this.facade.hobbies$();
    this.canCloseModal$ = this.facade.canCloseModal$();
    this.userToUpdate$ = this.facade.currentUserToUpdate$();
  }
}
