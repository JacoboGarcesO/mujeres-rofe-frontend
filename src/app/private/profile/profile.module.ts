import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LayoutMainModule } from 'src/app/ui/layouts/layout-main/layout-main.module';
import { HeaderContainerModule } from 'src/app/shared/shell/header-container/header-container.module';
import { ProfileUserContainerModule } from 'src/app/shared/profile/profile-user-container/profile-user-container.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    LayoutMainModule,
    HeaderContainerModule,
    ProfileUserContainerModule,
  ],
})
export class ProfileModule { }
