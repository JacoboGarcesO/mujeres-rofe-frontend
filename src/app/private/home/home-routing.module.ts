import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderContainerComponent } from 'src/app/shared/shell/header-container/header-container.component';
import { HomeContentContainerComponent } from 'src/app/shared/home/home-content-container/home-content-container.component';
import { RequestNotificationsContainerComponent } from 'src/app/shared/static/request-notifications-container/request-notifications-container.component';
import { LayoutMainComponent } from 'src/app/ui/layouts/layout-main/layout-main.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: RequestNotificationsContainerComponent, outlet: 'notifications' },
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: HomeContentContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
