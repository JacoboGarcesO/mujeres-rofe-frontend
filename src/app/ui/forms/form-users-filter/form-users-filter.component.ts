import { Component, ChangeDetectionStrategy, Output, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-users-filter',
  templateUrl: './form-users-filter.component.html',
  styleUrls: ['./form-users-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUsersFilterComponent {
  @Input() options: OptionModel[];

  private input$: Subject<{city: string}> = new Subject();
  @Input() set dataInput(value: {city: string}) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<{city: string}> = new Subject();
  form = createForm<{city: string}>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    formControls: {
      city: new UntypedFormControl(null),
    },
  });

  @Output() formUpdate = this.form.formGroup.valueChanges;
}
