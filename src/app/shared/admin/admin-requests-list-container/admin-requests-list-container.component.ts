import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';
import { AdminRequestsListContainerFacade } from './admin-requests-list-container.facade';

@Component({
  selector: 'mr-admin-requests-list-container',
  templateUrl: './admin-requests-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRequestsListContainerComponent implements OnInit, OnDestroy {
  public requests$: Observable<FormRequestModel[]>;

  constructor(private facade: AdminRequestsListContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadRequests();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyRequests();
    this.facade.destroySubscriptions();
  }

  handleDeleteRequest(requestId: string): void {
    this.facade.deleteRequest(requestId);
  }

  private initializeSubscriptions(): void {
    this.requests$ = this.facade.requests$();
  }
}
