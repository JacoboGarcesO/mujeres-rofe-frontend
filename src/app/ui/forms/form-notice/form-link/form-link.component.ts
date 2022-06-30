import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { LinkNoticeModel } from 'src/app/core/models/notice.model';

@Component({
  selector: 'mr-form-link',
  templateUrl: './form-link.component.html',
  styleUrls: ['./form-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(FormLinkComponent),
})
export class FormLinkComponent {
  @Output() deleteControl: EventEmitter<void> = new EventEmitter();
  public form = createForm<LinkNoticeModel>(this, {
    formType: FormType.SUB,
    formControls: {
      name: new UntypedFormControl(null, Validators.required),
      url: new UntypedFormControl(null, Validators.required),
    },
  });

  handleDeleteControl(): void {
    this.deleteControl.emit();
  }
}
