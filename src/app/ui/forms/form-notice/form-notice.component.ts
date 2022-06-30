import { Component, ChangeDetectionStrategy, Input, Output, OnChanges } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-notice',
  templateUrl: './form-notice.component.html',
  styleUrls: ['./form-notice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNoticeComponent implements OnChanges {
  @Input() channelOptions: OptionModel[];
  @Input() forms: OptionModel[];
  @Input() canResetForm: boolean;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<NoticeModel> = new Subject();
  @Input() set dataInput(value: NoticeModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<NoticeModel> = new Subject();
  form = createForm<NoticeModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      title: new UntypedFormControl(null, Validators.required),
      icon: new UntypedFormControl(null, Validators.required),
      content: new UntypedFormControl(null, Validators.required),
      order: new UntypedFormControl(null, Validators.required),
      channel: new UntypedFormControl(null, Validators.required),
      description: new UntypedFormControl(null),
      links: new UntypedFormControl(null),
      showUsersList: new UntypedFormControl(null),
      isLink: new UntypedFormControl(null),
      url: new UntypedFormControl('https://'),
      formId: new UntypedFormControl(null),
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
