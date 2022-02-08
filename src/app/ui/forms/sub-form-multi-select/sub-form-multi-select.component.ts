import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { createForm, FormType } from 'ngx-sub-form';
import { OptionModel } from 'src/app/core/models/option.model';
import { MiscUtil } from 'src/app/core/utils/misc.util';

@Component({
  selector: 'mr-sub-form-multi-select',
  templateUrl: './sub-form-multi-select.component.html',
  styleUrls: ['./sub-form-multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SubFormMultiSelectComponent implements OnInit {
  @Input() placeholder: string;
  @Input() isDisabled: boolean;
  @Input() options: OptionModel[];
  @Input() selectedOptions: OptionModel[];
  @Input() icon: string;
  @Input() label: string;
  public uniqueId = MiscUtil.uuid();
  public dropdownSettings: IDropdownSettings;
  public form = createForm<OptionModel[], { value: OptionModel[]}>(this, {
    formType: FormType.SUB,
    formControls: {
      value: new FormControl(null, Validators.required),
    },
    toFormGroup: (value: OptionModel[]): { value: OptionModel[] } => {
      return { value };
    },
    fromFormGroup: (formValue: { value: OptionModel[] }): OptionModel[] => {
      return formValue.value;
    },
  });


  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'label',
      itemsShowLimit: 3,
      enableCheckAll: false,
    };
  }

  onItemSelect(selectedOption: OptionModel) {
    this.selectedOptions?.filter((option) => option?.id !== selectedOption?.id)?.push(selectedOption);
    this.form.formGroup.controls.value.setValue(this.selectedOptions);
  }

  onSelectAll() {
    this.selectedOptions = this.options;
    this.form.formGroup.controls.value.setValue(this.selectedOptions);
  }

  onItemDeselect(deselectedOption: OptionModel) {
    this.selectedOptions = this.selectedOptions?.filter((option) => option?.id !== deselectedOption?.id);
    this.form.formGroup.controls.value.setValue(this.selectedOptions);
  }
}
