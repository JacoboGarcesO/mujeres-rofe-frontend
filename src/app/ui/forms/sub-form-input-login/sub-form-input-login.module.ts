import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormInputLoginComponent } from './sub-form-input-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../../elements/text/text.module';

@NgModule({
  declarations: [
    SubFormInputLoginComponent,
  ],
  imports: [
    CommonModule,
    TextModule,
    ReactiveFormsModule,
  ],
  exports: [
    SubFormInputLoginComponent,
  ],
})
export class SubFormInputLoginModule { }
