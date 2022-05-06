import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSlidesListComponent } from './admin-slides-list.component';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { TextModule } from '../../elements/text/text.module';
import { ModalModule } from '../../elements/modal/modal.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TableModule } from '../table/table.module';
import { ImageModule } from '../../elements/image/image.module';
import { FormSlideModule } from '../../forms/form-slide/form-slide.module';

@NgModule({
  declarations: [
    AdminSlidesListComponent,
  ],
  imports: [
    CommonModule,
    ButtonIconModule,
    TextModule,
    ButtonModule,
    ModalModule,
    TableModule,
    ImageModule,
    FormSlideModule,
  ],
  exports: [
    AdminSlidesListComponent,
  ],
})
export class AdminSlidesListModule { }
