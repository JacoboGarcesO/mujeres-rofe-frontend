import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormFileComponent } from './sub-form-file.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../../elements/text/text.module';
import { ButtonModule } from '../../elements/button/button.module';
import { ImageModule } from '../../elements/image/image.module';
import { PipesModule } from '../../pipes/pipes.module';

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
  ],
  exports: [
    SubFormFileComponent,
  ],
})
export class SubFormFileModule { }
