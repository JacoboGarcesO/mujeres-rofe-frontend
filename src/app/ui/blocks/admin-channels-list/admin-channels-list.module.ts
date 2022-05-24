import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChannelsListComponent } from './admin-channels-list.component';
import { TableModule } from '../table/table.module';
import { ButtonModule } from '../../elements/button/button.module';
import { TextModule } from '../../elements/text/text.module';
import { ImageModule } from '../../elements/image/image.module';
import { ModalModule } from '../../elements/modal/modal.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ButtonIconModule } from '../../elements/button-icon/button-icon.module';
import { FormChannelModule } from '../../forms/form-channel/form-channel.module';


@NgModule({
  declarations: [
    AdminChannelsListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TextModule,
    ImageModule,
    ModalModule,
    PipesModule,
    ButtonIconModule,
    FormChannelModule,
  ],
  exports: [
    AdminChannelsListComponent,
  ],
})
export class AdminChannelsListModule { }
