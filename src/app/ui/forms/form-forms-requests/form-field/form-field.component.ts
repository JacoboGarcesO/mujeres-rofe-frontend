import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
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
  @Output() deleteControl: EventEmitter<void> = new EventEmitter();
  public form = createForm<FormRequestFieldsModel>(this, {
    formType: FormType.SUB,
    formControls: {
      label: new UntypedFormControl(null, Validators.required),
      type: new UntypedFormControl(null, Validators.required),
      placeholder: new UntypedFormControl(null),
      image: new UntypedFormControl(null),
      value: new UntypedFormControl(null),
      options: new UntypedFormControl(null),
    },
  });

  public options = [
    { id: 'image', label: 'Imagen'},
    { id: 'text', label: 'Texto'},
    { id: 'list', label: 'Lista'},
  ];

  handleDeleteControl(): void {
    this.deleteControl.emit();
  }
}
