import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'mr-profile-current-user',
  templateUrl: './profile-current-user.component.html',
  styleUrls: ['./profile-current-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProfileCurrentUserComponent {
  @Input() hobbies: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() states: OptionModel[];
  @Input() documents: OptionModel[];
  @Input() education: OptionModel[];
  @Input() ethnicGroups: OptionModel[];
  @Input() familyCore: OptionModel[];
  @Input() familyIncome: OptionModel[];
  @Input() housingType: OptionModel[];
  @Input() maritalStatus: OptionModel[];
  @Input() stratum: OptionModel[];
  @Input() sustenting: OptionModel[];
  @Input() disclosures: OptionModel[];
  @Input() user: UserModel;
  @Output() createUser: EventEmitter<UserModel> = new EventEmitter();
  @Output() selectedState: EventEmitter<string> = new EventEmitter();
  private currentUser: UserModel;

  constructor(
    private router: Router,
  ) { }

  handleCreateUser(user: UserModel) {    
    this.createUser.emit(user);
  }

  handleLoadCities(formUpdate: UserModel) {    
    if (formUpdate?.location?.state && (formUpdate?.location?.state !== this.currentUser?.location?.state)) {
      this.selectedState.emit(formUpdate?.location?.state);
    }

    this.currentUser = { ...formUpdate };
  }

  handleToBack(): void {
    this.router.navigateByUrl('');
  }
}
