import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ButtonModule } from '../button/button.module';
import { CardModule } from '../card/card.module';


@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class ModalModule { }
