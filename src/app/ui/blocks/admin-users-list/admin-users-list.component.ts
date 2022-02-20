import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CurrentUserModel } from '../../../core/models/current-user.model';

@Component({
  selector: 'mr-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersListComponent { 
  @Input() users: CurrentUserModel[];
  @Output() deleteUser: EventEmitter<CurrentUserModel> = new EventEmitter();

  handleDeleteUser(user: CurrentUserModel): void {
    this.deleteUser.emit(user);
  }
}
