import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '../../ui/layouts/layout-main/layout-main.component';
import { HeaderContainerComponent } from '../../shared/shell/header-container/header-container.component';
import { ChannelsContentContainerComponent } from '../../shared/channels/channels-content-container/channels-content-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: ChannelsContentContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsRoutingModule { }
