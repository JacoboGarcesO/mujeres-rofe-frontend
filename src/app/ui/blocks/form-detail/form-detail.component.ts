import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDetailComponent { 
  @Input() form: FormRequestModel;
  @Output() sendform: EventEmitter<FormRequestModel> = new EventEmitter();

  handleSendForm(form: FormRequestModel): void {
    this.sendform.emit(form);
  }
}
