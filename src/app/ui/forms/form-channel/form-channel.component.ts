import { Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ChannelModel } from '../../../core/models/channel.model';
import { createForm, FormType } from 'ngx-sub-form';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mr-form-channel',
  templateUrl: './form-channel.component.html',
  styleUrls: ['./form-channel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormChannelComponent {
  @Input() canResetForm: boolean;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<ChannelModel> = new Subject();
  @Input() set dataInput(value: ChannelModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<ChannelModel> = new Subject();
  form = createForm<ChannelModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      name: new UntypedFormControl(null, Validators.required),
      icon: new UntypedFormControl(null, Validators.required),
      banner: new UntypedFormControl(null, Validators.required),
      order: new UntypedFormControl(null, Validators.required),
      description: new UntypedFormControl(null),
      type: new UntypedFormControl(null, Validators.required),
      link: new UntypedFormControl(null, Validators.required),
      //---
      id: new UntypedFormControl(null),
    },
  });

  ngOnChanges(): void {
    if (!this.canResetForm) { return; }

    Object.keys(
      this.form.formGroup.controls,
    ).forEach((control) => this.form.formGroup.controls[control].setValue(null));
  }
}
