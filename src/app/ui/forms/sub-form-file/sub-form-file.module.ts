import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from '../../elements/image/image.module';
import { TextModule } from '../../elements/text/text.module';
import { PipesModule } from '../../pipes/pipes.module';
import { FormErrorsComponent } from '../form-errors/form-errors.component';
import { SubFormFileComponent } from './sub-form-file.component';

@NgModule({
  declarations: [
    SubFormFileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextModule,
    ImageModule,
    PipesModule,
    FormErrorsComponent,
  ],
  exports: [
    SubFormFileComponent,
  ],
})
export class SubFormFileModule { }
