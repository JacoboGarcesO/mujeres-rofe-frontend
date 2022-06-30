import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { FormRequestFieldsModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(FormFieldsComponent),
})
export class FormFieldsComponent {
  public form = createForm<FormRequestFieldsModel[], { value: FormRequestFieldsModel[] }>(this, {
    formType: FormType.SUB,
    formControls: {
      value: new UntypedFormArray([]),
    },
    toFormGroup: (value: FormRequestFieldsModel[]): { value: FormRequestFieldsModel[] } => {
      return { value };
    },
    fromFormGroup: (formValue: { value: FormRequestFieldsModel[] }): FormRequestFieldsModel[] => {
      return formValue.value;
    },
  });

  trackIndex(index: number): number {
    return index;
  }
}
