import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { AdminFormsListContainerFacade } from './admin-forms-list-container.facade';

@Component({
  selector: 'mr-admin-forms-list-container',
  templateUrl: './admin-forms-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFormsListContainerComponent { 

  constructor(private facade: AdminFormsListContainerFacade) { }

  handleCreateForm(form: FormRequestModel): void {
    this.facade.createForm(form);
  }
}
