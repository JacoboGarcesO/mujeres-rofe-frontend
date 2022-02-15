import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice.component';
import { ImageModule } from '../image/image.module';
import { TextModule } from '../text/text.module';

@NgModule({
  declarations: [
    NoticeComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    TextModule,
  ],
  exports: [
    NoticeComponent,
  ],
})
export class NoticeModule { }
