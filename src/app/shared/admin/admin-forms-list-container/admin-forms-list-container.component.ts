import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { AdminFormsListContainerFacade } from './admin-forms-list-container.facade';

@Component({
  selector: 'mr-admin-forms-list-container',
  templateUrl: './admin-forms-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFormsListContainerComponent implements OnInit, OnDestroy { 
  public canCloseModal$: Observable<boolean>;
  public forms$: Observable<FormRequestModel[]>;
  public form$: Observable<FormRequestModel>;
  public templates$: Observable<OptionModel[]>;
  public channels$: Observable<OptionModel[]>;

  constructor(private facade: AdminFormsListContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadForms();
    this.facade.loadChannelOptions();
    this.facade.loadResources();
    this.initializeSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroyForms();
    this.facade.destroyForm();
    this.facade.destroyChannelOptions();
    this.facade.destroyResources();
    this.facade.destroySubscriptions();
  }

  handleCreateForm(form: FormRequestModel): void {
    this.facade.createForm(form);
  }

  handleUpdateForm(form: FormRequestModel): void {
    this.facade.updateForm(form);
  }

  handleDeleteForm(formId: string): void {
    this.facade.deleteForm(formId);
  }

  handleLoadForm(formId: string) {
    this.facade.destroyCanCloseModal();
    this.facade.loadForm(formId);
  }

  private initializeSubscriptions(): void {
    this.canCloseModal$ = this.facade.canCloseModal$();
    this.forms$ = this.facade.forms$();
    this.form$ = this.facade.form$();
    this.templates$ = this.facade.templates$();
    this.channels$ = this.facade.channelOptions$();
  }
}
