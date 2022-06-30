import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { FormRequestFieldsModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(FormFieldsComponent),
})
export class FormFieldsComponent implements AfterViewInit {
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

  get formManager(): { [key: string]: (...args: any) => void } {
    return {
      delete: this.delete.bind(this),
      add: this.add.bind(this),
    };
  }

  ngAfterViewInit(): void {
    this.add();
  }

  trackIndex(index: number): number {
    return index;
  }

  private delete(index: number): void {
    this.form.formGroup.controls.value.removeAt(index);
  }

  private add(): void {
    this.form.formGroup.controls.value.push(new UntypedFormControl({ label: null, placeholder: null, value: null }));
  }
}
