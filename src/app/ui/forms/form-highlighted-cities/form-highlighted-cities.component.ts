import { Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-highlighted-cities',
  templateUrl: './form-highlighted-cities.component.html',
  styleUrls: ['./form-highlighted-cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormHighlightedCitiesComponent {
  @Input() options: OptionModel[];

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
      value: new FormControl(null, Validators.required),
    },
  });
}