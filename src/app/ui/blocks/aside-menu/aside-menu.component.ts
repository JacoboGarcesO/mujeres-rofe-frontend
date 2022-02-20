import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { AppState } from '../../../core/state/app.state';

@Component({
  selector: 'mr-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuComponent implements OnInit {
  @Input() isVisible = false;
  @Input() channels: ChannelModel[];
  @Input() channel: ChannelModel;
  @Input() currentUser: CurrentUserModel | undefined;
  @Output() clickedLogout: EventEmitter<void> = new EventEmitter();

  constructor(
    private appState: AppState,
  ) { }

  ngOnInit(): void {
    this.appState.users.currentUser.$().subscribe((user) => {     
      if(user?.rol === 'user') this.channels.pop(); 
    });
  }

  handleLogout(): void {
    this.clickedLogout.emit();
  }
}
