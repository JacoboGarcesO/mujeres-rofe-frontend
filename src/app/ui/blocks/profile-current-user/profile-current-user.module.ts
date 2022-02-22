import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCurrentUserComponent } from './profile-current-user.component';

@NgModule({
  declarations: [
    ProfileCurrentUserComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProfileCurrentUserComponent,
  ],
})
export class ProfileCurrentUserModule { }
