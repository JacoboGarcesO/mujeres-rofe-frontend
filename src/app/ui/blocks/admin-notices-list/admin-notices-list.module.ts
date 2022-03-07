import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNoticesListComponent } from './admin-notices-list.component';
import { TableModule } from '../table/table.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { ImageModule } from '../../elements/image/image.module';
import { ModalModule } from '../../elements/modal/modal.module';
import { FormNoticeModule } from '../../forms/form-notice/form-notice.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { FormNoticeFilterModule } from '../../forms/form-notice-filter/form-notice-filter.module';

@NgModule({
  declarations: [
    AdminNoticesListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TextModule,
    ImageModule,
    ModalModule,
    FormNoticeModule,
    PipesModule,
    ButtonIconModule,
    FormNoticeFilterModule,
  ],
  exports: [
    AdminNoticesListComponent,
  ],
})
export class AdminNoticesListModule { }
