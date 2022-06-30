import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
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
  public uniqueId = MiscUtil.uuid();
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
  });

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  handleKeypress(key: string): boolean {
    const pattern = new RegExp(this.patternKey);
    return pattern.test(key);
  }

  handleFocus(target: EventTarget | null): void {
    this.renderer.selectRootElement(target).select();
    this.toggleLabelFocus(true);
  }

  handleBlur(): void {
    this.toggleLabelFocus(false);
  }

  private toggleLabelFocus(toggle: boolean): void {
    const classes = 'sub-form-input__label--focus';
    this.toggleLabelClass(toggle, classes);
  }

  private toggleLabelError(toggle: boolean): void {
    const classes = 'sub-form-input__label--error';
    this.toggleLabelClass(toggle, classes);
  }

  private toggleLabelClass(toggle: boolean, classes: string): void {
    const label = this.el?.nativeElement?.querySelector('.sub-form-input__label');

    if (!label) { return; }

    toggle
      ? this.renderer.addClass(label, classes)
      : this.renderer.removeClass(label, classes);
  }
}
