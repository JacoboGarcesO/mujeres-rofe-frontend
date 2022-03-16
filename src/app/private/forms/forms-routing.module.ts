import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailContainerComponent } from 'src/app/shared/forms/form-detail-container/form-detail-container.component';
import { HeaderContainerComponent } from 'src/app/shared/shell/header-container/header-container.component';
import { RequestNotificationsContainerComponent } from 'src/app/shared/static/request-notifications-container/request-notifications-container.component';
import { LayoutMainComponent } from 'src/app/ui/layouts/layout-main/layout-main.component';

const routes: Routes = [
  {
    path: ':formId',
    component: LayoutMainComponent,
    children: [
      { path: '', component: RequestNotificationsContainerComponent, outlet: 'notifications' },
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: FormDetailContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule { }
