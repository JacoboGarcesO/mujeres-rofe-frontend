import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingCardComponent } from './floating-card.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    FloatingCardComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
    FloatingCardComponent,
  ],
})
export class FloatingCardModule { }
