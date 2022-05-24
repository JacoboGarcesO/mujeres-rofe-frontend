import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { SlideModel } from 'src/app/core/models/slide.model';
import { MiscUtil } from 'src/app/core/utils/misc.util';
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

  get isMobile(): boolean {
    return MiscUtil.isMobile();
  }

  handleRedirect(url: string): void {
    (window as any).open(url, '_blank');
  }
}
