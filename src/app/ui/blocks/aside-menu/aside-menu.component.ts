import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { ChannelEnum } from 'src/app/core/enums/channel.enum';
import { fromRolEnum } from 'src/app/core/enums/rols.enum';
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
  @Input() channel: ChannelModel;
  @Input() currentUser: CurrentUserModel;
  @Output() clickedLogout: EventEmitter<void> = new EventEmitter();

  get channelsFiltered(): ChannelModel[] {
    return fromRolEnum(this.currentUser.rol) === 'user' 
      ? this.channels.filter((channel) => channel.type !== ChannelEnum.admin) 
      : this.channels;
  }

  handleLogout(): void {
    this.clickedLogout.emit();
  }
}
