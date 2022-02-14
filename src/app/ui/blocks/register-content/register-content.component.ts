import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { OptionModel } from 'src/app/core/models/option.model';

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
  @Output() createUser: EventEmitter<CurrentUserModel> = new EventEmitter();
  @Output() selectedState: EventEmitter<string> = new EventEmitter();

  handleCreateUser(user: CurrentUserModel) {
    this.createUser.emit(user);
  }

  handleLoadCities(stateId: string) {
    this.selectedState.emit(stateId);
    
  }
}
