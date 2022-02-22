import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUserComponent } from './profile-user.component';
import { CardModule } from '../../elements/card/card.module';
import { TextModule } from '../../elements/text/text.module';
import { ImageModule } from '../../elements/image/image.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';

@NgModule({
  declarations: [
    ProfileUserComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    TextModule,
    ImageModule,
    ButtonIconModule,
  ],
  exports: [
    ProfileUserComponent,
  ],
})
export class ProfileUserModule { }
