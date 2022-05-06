import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SwiperModule } from 'swiper/angular';
import { ImageModule } from '../../elements/image/image.module';

@NgModule({
  declarations: [
    SliderComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ImageModule,
  ],
  exports: [
    SliderComponent,
  ],
})
export class SliderModule { }
