import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { PipesModule } from 'src/app/ui/pipes/pipes.module';

@NgModule({
  declarations: [
    ImageComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [
    ImageComponent,
  ],
})
export class ImageModule { }
