import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { LayoutMainModule } from 'src/app/ui/layouts/layout-main/layout-main.module';
import { HeaderContainerModule } from 'src/app/shared/shell/header-container/header-container.module';
import { RequestNotificationsContainerModule } from 'src/app/shared/static/request-notifications-container/request-notifications-container.module';
import { FormDetailContainerModule } from 'src/app/shared/forms/form-detail-container/form-detail-container.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsRoutingModule,
    LayoutMainModule,
    HeaderContainerModule,
    RequestNotificationsContainerModule,
    FormDetailContainerModule,
  ],
})
export class FormsModule { }
