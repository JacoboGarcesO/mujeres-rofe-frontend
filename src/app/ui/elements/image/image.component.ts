import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'mr-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @Input() image: string | undefined;
  @Input() rounded: 'none' | 'medium' | 'large' | 'circle' = 'none';
  @Input() radius: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'all' = 'all';
  @Input() alt: string | undefined;
}
