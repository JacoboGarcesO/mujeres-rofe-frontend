import { Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ChannelModel } from '../../../core/models/channel.model';
import { createForm, FormType } from 'ngx-sub-form';
import { FormControl, Validators } from '@angular/forms';

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
      name: new FormControl(null, Validators.required),
      icon: new FormControl(null, Validators.required),
      banner: new FormControl(null, Validators.required),
      order: new FormControl(null, Validators.required),
      description: new FormControl(null),
      type: new FormControl(null, Validators.required),
      link: new FormControl(null, Validators.required),
      //---
      id: new FormControl(null),
    },
  });

  ngOnChanges(): void {
    if (!this.canResetForm) { return; }

    Object.keys(
      this.form.formGroup.controls,
    ).forEach((control) => this.form.formGroup.controls[control].setValue(null));
  }
}
