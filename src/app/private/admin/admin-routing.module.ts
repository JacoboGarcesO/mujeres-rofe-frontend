import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '../../ui/layouts/layout-main/layout-main.component';
import { RequestNotificationsContainerComponent } from '../../shared/static/request-notifications-container/request-notifications-container.component';
import { HeaderContainerComponent } from '../../shared/shell/header-container/header-container.component';
import { AdminContentContainerComponent } from '../../shared/admin/admin-content-container/admin-content-container.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: RequestNotificationsContainerComponent, outlet: 'notifications'},
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: AdminContentContainerComponent },
    ],
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
