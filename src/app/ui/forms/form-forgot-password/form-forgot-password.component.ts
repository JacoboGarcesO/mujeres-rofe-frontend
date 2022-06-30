import { Component, ChangeDetectionStrategy, Output, Input } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { REGEX_RESOURCE } from 'src/app/core/resources/regex.resource';

@Component({
  selector: 'mr-form-forgot-password',
  templateUrl: './form-forgot-password.component.html',
  styleUrls: ['./form-forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormForgotPasswordComponent {
  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<{ value: string }> = new Subject();
  @Input() set dataInput(value: { value: string }) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<{ value: string }> = new Subject();
  form = createForm<{ value: string }>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      value: new UntypedFormControl(null, [Validators.required, Validators.pattern(REGEX_RESOURCE.email)]),
    },
  });

}
