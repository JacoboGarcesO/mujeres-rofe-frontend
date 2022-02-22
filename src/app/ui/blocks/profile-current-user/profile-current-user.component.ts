import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'mr-profile-current-user',
  templateUrl: './profile-current-user.component.html',
  styleUrls: ['./profile-current-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCurrentUserComponent {
  @Input() hobbies: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() states: OptionModel[];
  @Input() user: UserModel;
  @Output() createUser: EventEmitter<UserModel> = new EventEmitter();
  @Output() selectedState: EventEmitter<string> = new EventEmitter();
  private currentUser: UserModel;

  handleCreateUser(user: UserModel) {    
    this.createUser.emit(user);
  }

  handleLoadCities(formUpdate: UserModel) {    
    if (formUpdate?.location?.state && (formUpdate?.location?.state !== this.currentUser?.location?.state)) {
      this.selectedState.emit(formUpdate?.location?.state);
    }

    this.currentUser = { ...formUpdate };
  }
}
