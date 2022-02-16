import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelModel } from 'src/app/core/models/channel.model';

@Component({
  selector: 'mr-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemMenuComponent {
  @Input() item: ChannelModel;

  constructor(private router: Router) { }

  navigateToChannel(url: string): void {
    this.router.navigateByUrl(url);
  }
}
