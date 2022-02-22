import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCurrentUserComponent } from './profile-current-user.component';
import { FormUserModule } from '../../forms/form-user/form-user.module';
import { CardModule } from '../../elements/card/card.module';
import { HomeBackgroundModule } from '../../elements/home-background/home-background.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';

@NgModule({
  declarations: [
    ProfileCurrentUserComponent,
  ],
  imports: [
    CommonModule,
    HomeBackgroundModule,
    CardModule,
    ButtonIconModule,
    FormUserModule,
  ],
  exports: [
    ProfileCurrentUserComponent,
  ],
})
export class ProfileCurrentUserModule { }
