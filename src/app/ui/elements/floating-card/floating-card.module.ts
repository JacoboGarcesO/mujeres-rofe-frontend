import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingCardComponent } from './floating-card.component';
import { ButtonModule } from '../button/button.module';
import { ButtonIconModule } from '../button-icon/button-icon.module';

@NgModule({
  declarations: [
    FloatingCardComponent,
  ],
  imports: [
    CommonModule,
    ButtonIconModule,
  ],
  exports: [
    FloatingCardComponent,
  ],
})
export class FloatingCardModule { }
