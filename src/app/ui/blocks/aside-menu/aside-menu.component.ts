import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';

@Component({
  selector: 'mr-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuComponent {
  @Input() isVisible = false;
  @Input() channels: ChannelModel[];
  @Input() currentUser: CurrentUserModel | undefined;
  @Output() clickedLogout: EventEmitter<void> = new EventEmitter();


  handleLogout(): void {
    this.clickedLogout.emit();
  }
}
