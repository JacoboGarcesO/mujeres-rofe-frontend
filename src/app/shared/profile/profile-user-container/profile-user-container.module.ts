import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUserContainerComponent } from './profile-user-container.component';
import { ProfileUserModule } from 'src/app/ui/blocks/profile-user/profile-user.module';

@NgModule({
  declarations: [
    ProfileUserContainerComponent,
  ],
  imports: [
    CommonModule,
    ProfileUserModule,
  ],
  exports: [
    ProfileUserContainerComponent,
  ],
})
export class ProfileUserContainerModule { }
