import { Component, ChangeDetectionStrategy, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
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
}
