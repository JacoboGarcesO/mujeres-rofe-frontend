import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateGuard } from './private.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then((module) => module.HomeModule),
    canActivate: [PrivateGuard],
  },
  {
    path: 'channels',
    loadChildren: () => import('./channels/channels.module')
      .then((module) => module.ChannelsModule),
    canActivate: [PrivateGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then((module) => module.AdminModule),
    canActivate: [PrivateGuard],
  },
  {
    path: 'notices',
    loadChildren: () => import('./notices/notices.module')
      .then((module) => module.NoticesModule),
    canActivate: [PrivateGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module')
      .then((module) => module.ProfileModule),
    canActivate: [PrivateGuard],
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module')
      .then((module) => module.FormsModule),
    canActivate: [PrivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }
