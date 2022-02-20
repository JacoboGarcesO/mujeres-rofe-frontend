import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserModel } from '../../../core/models/current-user.model';
import { AdminUsersListContainerFacade } from './admin-users-list-container.facade';

@Component({
  selector: 'mr-admin-users-list-container',
  templateUrl: './admin-users-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersListContainerComponent implements OnInit, OnDestroy {
  public users$: Observable<CurrentUserModel[]>;

  constructor(private facade: AdminUsersListContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadUsers();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyUsers();
    this.facade.destroySubscriptions();
  }

  handleDeleteUser(user: CurrentUserModel): void {
    this.facade.deleteUser(user);
  }

  private initializeSubscriptions(): void {
    this.users$ = this.facade.users$();
  }
}
