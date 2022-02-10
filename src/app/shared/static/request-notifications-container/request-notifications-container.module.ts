import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestNotificationsContainerComponent } from './request-notifications-container.component';
import { RequestNotificationsModule } from 'src/app/ui/elements/request-notifications/request-notifications.module';


@NgModule({
  declarations: [
    RequestNotificationsContainerComponent,
  ],
  imports: [
    CommonModule,
    RequestNotificationsModule,
  ],
  exports: [
    RequestNotificationsContainerComponent,
  ],
})
export class RequestNotificationsContainerModule { }
