import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTextareaComponent } from './control-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../../elements/text/text.module';


@NgModule({
  declarations: [
    ControlTextareaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextModule,
  ],
  exports: [
    ControlTextareaComponent,
  ],
})
export class ControlTextareaModule { }
