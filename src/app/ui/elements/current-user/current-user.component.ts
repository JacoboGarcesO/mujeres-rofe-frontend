import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';

@Component({
  selector: 'mr-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentUserComponent {
  @Input() currentUser: CurrentUserModel;
  @Input() channel: ChannelModel;
  @Output() clickedLogout: EventEmitter<void> = new EventEmitter();

  handleLogout(): void {
    this.clickedLogout.emit();
  }
}
