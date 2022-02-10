import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestNotificacionsContainerFacade } from './request-notifications-container.facade';

@Component({
  selector: 'mr-request-notifications-container',
  templateUrl: './request-notifications-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestNotificationsContainerComponent implements OnInit {
  public notification$: Observable<string>;

  constructor(private facade: RequestNotificacionsContainerFacade) { }

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  handleClose(): void {
    this.facade.destroyNotification();
  }

  private initializeSubscriptions(): void {
    this.notification$ = this.facade.notification$();
  }
}
