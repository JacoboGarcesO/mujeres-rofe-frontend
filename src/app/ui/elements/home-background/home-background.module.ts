import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBackgroundComponent } from './home-background.component';
import { ImageModule } from '../image/image.module';

@NgModule({
  declarations: [
    HomeBackgroundComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
  ],
  exports: [
    HomeBackgroundComponent,
  ],
})
export class HomeBackgroundModule { }
