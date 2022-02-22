import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
  ) { }

  navigateProfile(): void {
    
    this.router.navigateByUrl(`profile/my/${this.currentUser.id}`);
  }

  handleLogout(): void {
    this.clickedLogout.emit();
  }
}
