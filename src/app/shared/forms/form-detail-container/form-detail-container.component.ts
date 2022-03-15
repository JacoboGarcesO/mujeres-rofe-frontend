import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { FormDetailContainerFacade } from './form-detail-container.facade';

@Component({
  selector: 'mr-form-detail-container',
  templateUrl: './form-detail-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDetailContainerComponent implements OnInit, OnDestroy {
  public form$: Observable<FormRequestModel>;

  constructor(private route: ActivatedRoute, private facade: FormDetailContainerFacade) { }

  ngOnInit(): void {
    const { formId } = this.route.snapshot.params;
    this.facade.initSubscriptions();
    this.facade.loadForm(formId);
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyForm();
    this.facade.destroySubscriptions();
  }

  handleSaveRequest(form: FormRequestModel): void {
    this.facade.saveRequest(form);
  }

  private initializeSubscriptions(): void {
    this.form$ = this.facade.form$();
  }
}
