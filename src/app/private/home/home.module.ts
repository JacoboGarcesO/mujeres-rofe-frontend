import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainModule } from 'src/app/ui/layouts/layout-main/layout-main.module';
import { HeaderContainerModule } from 'src/app/shared/shell/header-container/header-container.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContentContainerModule } from 'src/app/shared/home/home-content-container/home-content-container.module';
import { RequestNotificationsContainerModule } from 'src/app/shared/static/request-notifications-container/request-notifications-container.module';

@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    CommonModule,
    LayoutMainModule,
    HeaderContainerModule,
    HomeContentContainerModule,
    RequestNotificationsContainerModule,
  ],
})
export class HomeModule { }
