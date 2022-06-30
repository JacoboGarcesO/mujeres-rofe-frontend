import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { MiscUtil } from 'src/app/core/utils/misc.util';

@Component({
  selector: 'mr-sub-form-checkbox',
  templateUrl: './sub-form-checkbox.component.html',
  styleUrls: ['./sub-form-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormCheckboxComponent),
})
export class SubFormCheckboxComponent {
  @Input() label: string;
  public uniqueId = MiscUtil.uuid();
  public form = createForm<boolean, { value: boolean }>(this, {
    formType: FormType.SUB,
    formControls: {
      value: new UntypedFormControl(null),
    },
    toFormGroup: (value: boolean): { value: boolean } => {
      return { value };
    },
    fromFormGroup: (formValue: { value: boolean }): boolean => {
      return formValue.value;
    },
  });

  handleKeydown(label: EventTarget): void {
    (label as HTMLLabelElement)?.click();
  }
}
