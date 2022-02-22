import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCurrentUserContainerComponent } from 'src/app/shared/profile/profile-current-user-container/profile-current-user-container.component';
import { ProfileUserContainerComponent } from 'src/app/shared/profile/profile-user-container/profile-user-container.component';
import { HeaderContainerComponent } from 'src/app/shared/shell/header-container/header-container.component';
import { RequestNotificationsContainerComponent } from 'src/app/shared/static/request-notifications-container/request-notifications-container.component';
import { LayoutMainComponent } from 'src/app/ui/layouts/layout-main/layout-main.component';

const routes: Routes = [
  {
    path: ':userId',
    component: LayoutMainComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: ProfileUserContainerComponent },
    ],
  },
  {
    path: 'my/:userId',
    component: LayoutMainComponent,
    children: [
      { path: '', component: RequestNotificationsContainerComponent, outlet: 'notifications'},
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: ProfileCurrentUserContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
