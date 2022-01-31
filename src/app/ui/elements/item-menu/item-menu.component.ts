import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mr-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemMenuComponent {
  @Input() item: any;
}
