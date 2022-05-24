import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SlideModel } from 'src/app/core/models/slide.model';
import SwiperCore, { Navigation, Pagination, Scrollbar, Virtual, Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Virtual, Navigation, Pagination, Scrollbar, Autoplay, EffectFade]);

@Component({
  selector: 'mr-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {
  @Input() items: SlideModel[];

  constructor(private router: Router) { }

  handleRedirect(url: string): void {
    (window as any).open(url, '_blank');
  }
}
