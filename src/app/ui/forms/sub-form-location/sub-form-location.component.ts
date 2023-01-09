import { Component, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { UserLocationModel } from 'src/app/core/models/locations.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { SubFormSelectComponent } from '../sub-form-select/sub-form-select.component';

@Component({
  selector: 'mr-sub-form-location',
  templateUrl: './sub-form-location.component.html',
  styleUrls: ['./sub-form-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormLocationComponent),
})
export class SubFormLocationComponent {
  @ViewChild('stateRef') stateRef: SubFormSelectComponent;
  @ViewChild('cityRef') cityRef: SubFormSelectComponent;
  @Input() states: OptionModel[];
  @Input() cities: OptionModel[];
  public form = createForm<UserLocationModel>(this, {
    formType: FormType.SUB,
    formControls: {
      city: new UntypedFormControl(null),
      state: new UntypedFormControl(null),
      cityName: new UntypedFormControl(null),
    },
  });

  markTouched(): void {
    this.stateRef.setIsTouched(true);
    this.cityRef.setIsTouched(true);
  }
}
