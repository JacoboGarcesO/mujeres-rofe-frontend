import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { UserModel } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-channels-content',
  templateUrl: './channels-content.component.html',
  styleUrls: ['./channels-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChannelsContentComponent {
  @Input() channel: ChannelModel;
  @Input() notices: NoticeModel[];
  @Input() users: UserModel[];

  constructor(private router: Router) { }

  navigateToNotice(channel: string, id: string): void {
    this.router.navigateByUrl(`notices/${channel}/${id}`);
  }

  navigateToUser(userId: string): void {
    this.router.navigateByUrl(`profile/${userId}`);
  }
}
