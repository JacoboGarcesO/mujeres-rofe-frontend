import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content.component';
import { ImageModule } from '../../elements/image/image.module';
import { HomeBackgroundModule } from '../../elements/home-background/home-background.module';
import { TextModule } from '../../elements/text/text.module';
import { CardModule } from '../../elements/card/card.module';
import { ModalModule } from '../../elements/modal/modal.module';
import { FormUserModule } from '../../forms/form-user/form-user.module';

@NgModule({
  declarations: [
    HomeContentComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    HomeBackgroundModule,
    TextModule,
    CardModule,
    ModalModule,
    FormUserModule,
  ],
  exports: [
    HomeContentComponent,
  ],
})
export class HomeContentModule { }
