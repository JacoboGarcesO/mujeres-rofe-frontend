import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { FormRequestFieldsModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(FormFieldComponent),
})
export class FormFieldComponent {
  public form = createForm<FormRequestFieldsModel>(this, {
    formType: FormType.SUB,
    formControls: {
      label: new FormControl(null),
      placeholder: new FormControl(null),
      type: new FormControl(null),
      value: new FormControl(null),
      image: new FormControl(null),
      options: new FormControl(null),
    },
  });
}
