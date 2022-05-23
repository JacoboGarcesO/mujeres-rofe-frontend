import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PublicGuard } from './public.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [PublicGuard],
    loadChildren: () => import('./authentication/authentication.module')
      .then((module) => module.AuthenticationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
