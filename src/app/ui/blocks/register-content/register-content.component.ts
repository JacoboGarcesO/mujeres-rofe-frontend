import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-register-content',
  templateUrl: './register-content.component.html',
  styleUrls: ['./register-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RegisterContentComponent {
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
    this.router.navigateByUrl('login');
  }
}
