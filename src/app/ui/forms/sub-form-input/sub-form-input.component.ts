import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';
import { UntypedFormControl, ValidationErrors } from '@angular/forms';
import { createForm, FormType, subformComponentProviders, TypedFormGroup } from 'ngx-sub-form';
import { REGEX_RESOURCE } from 'src/app/core/resources/regex.resource';
import { MiscUtil } from 'src/app/core/utils/misc.util';

@Component({
  selector: 'mr-sub-form-input',
  templateUrl: './sub-form-input.component.html',
  styleUrls: ['./sub-form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormInputComponent),
})
export class SubFormInputComponent {
  @Input() type: 'input' | 'email' | 'password' = 'input';
  @Input() icon: string;
  @Input() label: string;
  @Input() placeholder: string;
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
        (formGroup) => this.validateEmail(formGroup),
      ],
    }
  });

  get errors(): string[] | null {
    return Object.entries(this.form?.formGroupErrors?.formGroup ?? {}).map((error) => error[0]);
  }

  constructor(
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

  private validateEmail(formGroup: TypedFormGroup<{ value: string }>): ValidationErrors {
    if (this.type === 'email' && !REGEX_RESOURCE.email.test(formGroup.controls.value.value)) {
      return { emailFormatWrong: true };
    }

    return null;
  }
}
