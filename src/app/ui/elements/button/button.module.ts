import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { TextModule } from '../text/text.module';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
  ],
  exports: [
    ButtonComponent,
  ],
})
export class ButtonModule { }
