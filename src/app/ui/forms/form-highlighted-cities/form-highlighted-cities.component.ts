import { Component, ChangeDetectionStrategy, Input, Output, OnChanges } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-highlighted-cities',
  templateUrl: './form-highlighted-cities.component.html',
  styleUrls: ['./form-highlighted-cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormHighlightedCitiesComponent implements OnChanges {
  @Input() states: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() canResetForm: boolean;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<{value: string}> = new Subject();
  @Input() set dataInput(value: {value: string}) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<{value: string}> = new Subject();
  form = createForm<{value: string}>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      value: new UntypedFormControl(null, Validators.required),
    },
  });

  @Output() formUpdate = this.form.formGroup.valueChanges;

  ngOnChanges(): void {
    if (!this.canResetForm) { return; }
    
    Object.keys(
      this.form.formGroup.controls,
    ).forEach((control) => this.form.formGroup.controls[control].setValue(null));
  }
}
