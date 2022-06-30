import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-form-option',
  templateUrl: './form-option.component.html',
  styleUrls: ['./form-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(FormOptionComponent),
})
export class FormOptionComponent {
  @Output() deleteControl: EventEmitter<void> = new EventEmitter();
  @Output() addControl: EventEmitter<void> = new EventEmitter();
  public form = createForm<OptionModel>(this, {
    formType: FormType.SUB,
    formControls: {
      label: new UntypedFormControl(null, Validators.required),
      id: new UntypedFormControl(null),
    },
  });

  handleDeleteControl(): void {
    this.deleteControl.emit();
  }

  handleAddControl(): void {
    this.addControl.emit();
  }
}
