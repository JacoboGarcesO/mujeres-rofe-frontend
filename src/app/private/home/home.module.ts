import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMainModule } from 'src/app/ui/layouts/layout-main/layout-main.module';
import { HeaderContainerModule } from 'src/app/shared/shell/header-container/header-container.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    CommonModule,
    LayoutMainModule,
    HeaderContainerModule,
  ],
})
export class HomeModule { }
