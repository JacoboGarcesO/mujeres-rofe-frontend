import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { SlideModel } from 'src/app/core/models/slide.model';
import SwiperCore, { Navigation, Pagination, Scrollbar, Virtual } from 'swiper';

SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'mr-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {
  @Input() items: SlideModel[];
}
