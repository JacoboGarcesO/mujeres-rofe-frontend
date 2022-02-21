import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticesRoutingModule } from './notices-routing.module';
import { LayoutMainModule } from 'src/app/ui/layouts/layout-main/layout-main.module';
import { HeaderContainerModule } from 'src/app/shared/shell/header-container/header-container.module';
import { NoticesContentContainerModule } from 'src/app/shared/notices/notices-content-container/notices-content-container.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    LayoutMainModule,
    HeaderContainerModule,
    NoticesContentContainerModule,
  ],
})
export class NoticesModule { }
