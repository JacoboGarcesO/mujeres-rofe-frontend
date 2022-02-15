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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }
