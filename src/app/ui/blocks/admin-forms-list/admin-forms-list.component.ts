import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-admin-forms-list',
  templateUrl: './admin-forms-list.component.html',
  styleUrls: ['./admin-forms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminFormsListComponent {
  @Input() formRequests: FormRequestModel[];
  @Input() canCloseModal: boolean;
  @Output() createForm: EventEmitter<FormRequestModel> = new EventEmitter();
  @Output() updateForm: EventEmitter<FormRequestModel> = new EventEmitter();

  public currrenRequest: FormRequestModel;

  constructor(
    private router: Router,
  ) { }

  handleSetCurrentRequest(request: FormRequestModel) {
    this.currrenRequest = request;
  }

  handleCreateForm(form: FormRequestModel): void {
    this.createForm.emit(form);
  }

  handleUpdateForm(form: FormRequestModel): void {
    this.createForm.emit(form);
  }

  handleToBack(): void {
    this.router.navigateByUrl('');
  }
}
