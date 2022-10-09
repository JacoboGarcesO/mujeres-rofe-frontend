import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeInfoComponent } from './notice-info.component';
import { ImageModule } from '../../elements/image/image.module';
import { TextModule } from '../../elements/text/text.module';
import { ButtonModule } from '../../elements/button/button.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    NoticeInfoComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    TextModule,
    ButtonModule,
    PipesModule,
  ],
  exports: [
    NoticeInfoComponent,
  ],
})
export class NoticeInfoModule { }
