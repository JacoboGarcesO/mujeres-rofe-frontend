import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutMainModule } from 'src/app/ui/layouts/layout-main/layout-main.module';
import { HeaderContainerModule } from 'src/app/shared/shell/header-container/header-container.module';
import { RequestNotificationsContainerModule } from 'src/app/shared/static/request-notifications-container/request-notifications-container.module';
import { AdminContentContainerModule } from 'src/app/shared/admin/admin-content-container/admin-content-container.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutMainModule,
    RequestNotificationsContainerModule,
    HeaderContainerModule,
    AdminContentContainerModule,
  ],
})
export class AdminModule { }
