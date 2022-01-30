import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { TextModule } from '../text/text.module';

@NgModule({
  declarations: [
    AlertComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
  ],
  exports: [
    AlertComponent,
  ],
})
export class AlertModule { }
