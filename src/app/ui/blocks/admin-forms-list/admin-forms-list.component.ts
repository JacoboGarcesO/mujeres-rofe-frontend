import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { OptionModel } from 'src/app/core/models/option.model';
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
  @ViewChild('modalUpdateRef') modalUpdateRef: ModalComponent;
  @Input() formRequests: FormRequestModel[];
  @Input() templates: OptionModel[];
  @Input() channelsOptions: OptionModel[];
  @Input() formToUpdate: FormRequestModel;
  @Input() canCloseModal: boolean;
  @Output() createForm: EventEmitter<FormRequestModel> = new EventEmitter();
  @Output() updateForm: EventEmitter<FormRequestModel> = new EventEmitter();
  @Output() deleteForm: EventEmitter<string> = new EventEmitter();
  @Output() loadForm: EventEmitter<string> = new EventEmitter();

  public formRequestId: string;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.modalUpdateRef.close();
    this.cdRef.detectChanges();
  }

  handleLoadForm(formId: string) {
    this.loadForm.emit(formId);
  }

  handleCreateForm(form: FormRequestModel): void {
    this.createForm.emit(form);
  }

  handleUpdateForm(form: FormRequestModel): void {
    this.updateForm.emit(form);
  }

  handleDeleteForm(): void {
    this.deleteForm.emit(this.formRequestId);
  }

  setFormRequestId(formId: string): void {
    this.formRequestId = formId;
  }

  handleToBack(): void {
    this.router.navigateByUrl('');
  }
}
