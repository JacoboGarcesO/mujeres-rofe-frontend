import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { UserLocationModel } from 'src/app/core/models/locations.model';

@Component({
  selector: 'mr-sub-form-location',
  templateUrl: './sub-form-location.component.html',
  styleUrls: ['./sub-form-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormLocationComponent),
})
export class SubFormLocationComponent {
  public form = createForm<UserLocationModel>(this, {
    formType: FormType.SUB,
    formControls: {
      city: new FormControl(null),
      state: new FormControl(null),
    },
  });
}
