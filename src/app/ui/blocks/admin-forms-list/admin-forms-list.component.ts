import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { ModalComponent } from '../../elements/modal/modal.component';

@Component({
  selector: 'mr-admin-forms-list',
  templateUrl: './admin-forms-list.component.html',
  styleUrls: ['./admin-forms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminFormsListComponent {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @Input() formRequests: FormRequestModel[];
  @Input() canCloseModal: boolean;
  @Output() createForm: EventEmitter<FormRequestModel> = new EventEmitter();
  @Output() updateForm: EventEmitter<FormRequestModel> = new EventEmitter();

  public currrenRequest: FormRequestModel;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.cdRef.detectChanges();
  }

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
