import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { debounceTime, Subject } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-users-search',
  templateUrl: './form-users-search.component.html',
  styleUrls: ['./form-users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUsersSearchComponent {
  private input$: Subject<{firstName: string}> = new Subject();
  @Input() set dataInput(firstName: {firstName: string}) {
    this.input$.next(firstName);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<{firstName: string}> = new Subject();
  form = createForm<{firstName: string}>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    formControls: {
      firstName: new UntypedFormControl(null),
    },
  });

  @Output() formUpdate = this.form.formGroup.valueChanges.pipe(
    debounceTime(800),
  );
}
