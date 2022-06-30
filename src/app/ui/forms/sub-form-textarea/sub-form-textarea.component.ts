import { Component, ChangeDetectionStrategy, Input, Renderer2, ElementRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
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

  constructor (
    private renderer: Renderer2,
    private el: ElementRef,
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
    const classes = 'sub-form-textarea__label--focus';
    this.toggleLabelClass(toggle, classes);
  }

  private toggleLabelClass(toggle: boolean, classes: string): void {
    const label = this.el?.nativeElement?.querySelector('.sub-form-textarea__label');

    if (!label) { return; }

    toggle
      ? this.renderer.addClass(label, classes)
      : this.renderer.removeClass(label, classes);
  }
}
