import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCurrentUserContainerComponent } from './profile-current-user-container.component';
import { ProfileCurrentUserModule } from 'src/app/ui/blocks/profile-current-user/profile-current-user.module';

@NgModule({
  declarations: [
    ProfileCurrentUserContainerComponent,
  ],
  imports: [
    CommonModule,
    ProfileCurrentUserModule,
  ],
  exports: [
    ProfileCurrentUserContainerComponent,
  ],
})
export class ProfileCurrentUserContainerModule { }
