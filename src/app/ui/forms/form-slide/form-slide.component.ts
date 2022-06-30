import { Component, ChangeDetectionStrategy, OnChanges, Input, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { SlideModel } from 'src/app/core/models/slide.model';

@Component({
  selector: 'mr-form-slide',
  templateUrl: './form-slide.component.html',
  styleUrls: ['./form-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSlideComponent implements OnChanges {
  @Input() canResetForm: boolean;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<SlideModel> = new Subject();
  @Input() set dataInput(value: SlideModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<SlideModel> = new Subject();
  form = createForm<SlideModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      title: new UntypedFormControl(null, Validators.required),
      image: new UntypedFormControl(null, Validators.required),
      url: new UntypedFormControl(null, Validators.required),
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
