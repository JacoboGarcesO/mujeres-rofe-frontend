import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticesContentContainerComponent } from 'src/app/shared/notices/notices-content-container/notices-content-container.component';
import { HeaderContainerComponent } from 'src/app/shared/shell/header-container/header-container.component';
import { LayoutMainComponent } from 'src/app/ui/layouts/layout-main/layout-main.component';

const routes: Routes = [
  {
    path: ':id',
    component: LayoutMainComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: NoticesContentContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticesRoutingModule { }
