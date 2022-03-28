import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeInfoComponent } from './notice-info.component';
import { ImageModule } from '../../elements/image/image.module';
import { TextModule } from '../../elements/text/text.module';
import { ButtonModule } from '../../elements/button/button.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    NoticeInfoComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    PdfViewerModule,
    TextModule,
    ButtonModule,
  ],
  exports: [
    NoticeInfoComponent,
  ],
})
export class NoticeInfoModule { }
