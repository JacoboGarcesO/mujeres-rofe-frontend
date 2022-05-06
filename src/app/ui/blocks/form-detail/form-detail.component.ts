import { Location } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormDetailComponent { 
  @Input() form: FormRequestModel;
  @Output() sendform: EventEmitter<FormRequestModel> = new EventEmitter();

  constructor(private location: Location) { }

  handleSendForm(form: FormRequestModel): void {
    this.sendform.emit(form);
  }

  handleGoBack(): void {
    this.location.back();
  }
}
