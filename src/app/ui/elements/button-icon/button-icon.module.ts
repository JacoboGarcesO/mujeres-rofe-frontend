import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from './button-icon.component';
import { ButtonModule } from '../button/button.module';


@NgModule({
  declarations: [
    ButtonIconComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
    ButtonIconComponent,
  ],
})
export class ButtonIconModule { }
