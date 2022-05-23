import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-users-search',
  templateUrl: './form-users-search.component.html',
  styleUrls: ['./form-users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUsersSearchComponent {
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
    formControls: {
      value: new FormControl(null),
    },
  });

  @Output() formUpdate = this.form.formGroup.valueChanges;
}
