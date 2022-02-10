import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestNotificationsComponent } from './request-notifications.component';
import { ButtonModule } from '../button/button.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    RequestNotificationsComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    LoaderModule,
  ],
  exports: [
    RequestNotificationsComponent,
  ],
})
export class RequestNotificationsModule { }
