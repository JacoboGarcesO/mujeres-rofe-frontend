import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';
import { UntypedFormControl, ValidationErrors } from '@angular/forms';
import { createForm, FormType, subformComponentProviders, TypedFormGroup } from 'ngx-sub-form';
import { MiscUtil } from 'src/app/core/utils/misc.util';

@Component({
  selector: 'mr-sub-form-textarea',
  templateUrl: './sub-form-textarea.component.html',
  styleUrls: ['./sub-form-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormTextareaComponent),
})
export class SubFormTextareaComponent {
  @Input() text: string;
  @Input() placeholder: string;
  @Input() rows = 5;
  @Input() patternKey = '';
  @Input() isRequired = false;
  public uniqueId = MiscUtil.uuid();
  public isTouched = false;
  public form = createForm<string, { value: string }>(this, {
    formType: FormType.SUB,
    formControls: {
      value: new UntypedFormControl(null),
    },
    toFormGroup: (value: string): { value: string } => {
      return { value };
    },
    fromFormGroup: (formValue: { value: string }): string => {
      return formValue.value;
    },
    formGroupOptions: {
      validators: [
        (formGroup) => this.validateIsRequired(formGroup),
      ],
    }
  });

  get errors(): string[] | null {
    return Object.entries(this.form?.formGroupErrors?.formGroup ?? {}).map((error) => error[0]);
  }

  constructor (
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
  ) { }

  handleKeypress(key: string): boolean {
    const pattern = new RegExp(this.patternKey);
    return pattern.test(key);
  }

  handleFocus(target: EventTarget | null): void {
    this.renderer.selectRootElement(target).select();
  }

  handleBlur(): void {
    this.setIsTouched(true);
  }

  setIsTouched(value: boolean): void {
    this.isTouched = value;
    this.cdRef.detectChanges();
  }

  private validateIsRequired(formGroup: TypedFormGroup<{ value: string }>): ValidationErrors {
    if (this.isRequired && !formGroup.controls.value.value?.trim()) {
      return { required: true };
    }

    return null;
  }
}
