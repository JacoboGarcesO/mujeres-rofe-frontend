import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CurrentUserModel } from '../../../core/models/current-user.model';

@Component({
  selector: 'mr-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersListComponent { 
  @Input() users: CurrentUserModel[];

}
