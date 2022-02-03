import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { CardModule } from '../card/card.module';
import { ButtonIconModule } from '../button-icon/button-icon.module';


@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ButtonIconModule,
    CardModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class ModalModule { }
