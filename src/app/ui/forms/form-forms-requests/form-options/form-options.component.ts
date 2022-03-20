import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-options',
  templateUrl: './form-options.component.html',
  styleUrls: ['./form-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(FormOptionsComponent),
})
export class FormOptionsComponent implements AfterViewInit {
  public form = createForm<OptionModel[], { value: OptionModel[] }>(this, {
    formType: FormType.SUB,
    formControls: {
      value: new FormArray([]),
    },
    toFormGroup: (value: OptionModel[]): { value: OptionModel[] } => {
      return { value };
    },
    fromFormGroup: (formValue: { value: OptionModel[] }): OptionModel[] => {
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
    this.form.formGroup.controls.value.push(new FormControl({ label: null, placeholder: null, value: null }));
  }
}
