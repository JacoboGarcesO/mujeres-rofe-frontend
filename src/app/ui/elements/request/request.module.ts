import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { TextModule } from '../text/text.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ModalModule } from '../modal/modal.module';
import { ButtonModule } from '../button/button.module';
import { ImageModule } from '../image/image.module';

@NgModule({
  declarations: [
    RequestComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    PipesModule,
    ModalModule,
    ImageModule,
    ButtonModule,
  ],
  exports: [
    RequestComponent,
  ],
})
export class RequestModule { }
