import { Component, ChangeDetectionStrategy, Input, Output, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-forms-requests',
  templateUrl: './form-forms-requests.component.html',
  styleUrls: ['./form-forms-requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFormsRequestsComponent implements OnChanges {
  @Input() canResetForm: boolean;
  @Input() templates: OptionModel[];

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<FormRequestModel> = new Subject();
  @Input() set dataInput(value: FormRequestModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<FormRequestModel> = new Subject();
  form = createForm<FormRequestModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      title: new FormControl(null),
      subject: new FormControl(null),
      template: new FormControl(null),
      fields: new FormControl(null),
      //---
      id: new FormControl(null),
      creationDate: new FormControl(null),
    },
  });

  ngOnChanges(): void {
    if (!this.canResetForm) { return; }

    Object.keys(
      this.form.formGroup.controls,
    ).forEach((control) => this.form.formGroup.controls[control].setValue(null));
  }
}
