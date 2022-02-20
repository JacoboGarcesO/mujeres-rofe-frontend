import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'mr-register-content',
  templateUrl: './register-content.component.html',
  styleUrls: ['./register-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContentComponent {
  @Input() hobbies: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() states: OptionModel[];
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
