import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { OptionModel } from 'src/app/core/models/option.model';
import { MiscUtil } from 'src/app/core/utils/misc.util';

@Component({
  selector: 'mr-sub-form-multi-select',
  templateUrl: './sub-form-multi-select.component.html',
  styleUrls: ['./sub-form-multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormMultiSelectComponent),
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
  public isVisible = false;
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

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'label',
      itemsShowLimit: 2,
      enableCheckAll: false,
    };
  }

  toggle(): void {
    this.toggleLabelFocus(!this.isVisible);
    this.isVisible = !this.isVisible;
  }

  onItemSelect(selectedOption: OptionModel) {
    this.selectedOptions?.filter((option) => option?.id !== selectedOption?.id)?.push(selectedOption);
    this.form.formGroup.controls.value.setValue(this.selectedOptions);
    this.toggleLabelFocus(false);
  }

  onItemDeselect(deselectedOption: OptionModel) {
    this.selectedOptions = this.selectedOptions?.filter((option) => option?.id !== deselectedOption?.id);
    this.form.formGroup.controls.value.setValue(this.selectedOptions);
  }

  handleBlur(): void {
    this.toggleLabelFocus(false);
  }

  private toggleLabelFocus(toggle: boolean): void {
    const classes = 'sub-form-multi-select__label--focus';
    this.toggleLabelClass(toggle, classes);
  }

  private toggleLabelError(toggle: boolean): void {
    const classes = 'sub-form-multi-select__label--error';
    this.toggleLabelClass(toggle, classes);
  }

  private toggleLabelClass(toggle: boolean, classes: string): void {
    const label = this.el?.nativeElement?.querySelector('.sub-form-multi-select__label');

    if (!label) { return; }

    toggle
      ? this.renderer.addClass(label, classes)
      : this.renderer.removeClass(label, classes);
  }
}
