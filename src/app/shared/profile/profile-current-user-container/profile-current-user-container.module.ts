import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCurrentUserContainerComponent } from './profile-current-user-container.component';

@NgModule({
  declarations: [
    ProfileCurrentUserContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProfileCurrentUserContainerComponent,
  ],
})
export class ProfileCurrentUserContainerModule { }
