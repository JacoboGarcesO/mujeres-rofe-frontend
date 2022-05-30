import { Location } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  handleSendForm(form: FormRequestModel): void {
    this.sendform.emit(form);
  }

  handleToBack(): void {
    this.router.navigateByUrl('/channels/' + this.form?.channel);
  }
}
