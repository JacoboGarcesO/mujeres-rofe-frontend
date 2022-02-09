import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { UserLocationModel } from 'src/app/core/models/locations.model';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-sub-form-location',
  templateUrl: './sub-form-location.component.html',
  styleUrls: ['./sub-form-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormLocationComponent),
})
export class SubFormLocationComponent {
  @Input() states: OptionModel[];
  @Input() cities: OptionModel[];
  public form = createForm<UserLocationModel>(this, {
    formType: FormType.SUB,
    formControls: {
      city: new FormControl(null),
      state: new FormControl(null),
    },
  });
}
