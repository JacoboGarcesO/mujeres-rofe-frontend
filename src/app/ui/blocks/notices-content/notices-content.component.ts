import { Location } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'mr-notices-content',
  templateUrl: './notices-content.component.html',
  styleUrls: ['./notices-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoticesContentComponent {
  @Input() notice: NoticeModel;
  @Input() channel: ChannelModel;
  @Input() users: UserModel[];

  constructor(
    private location: Location,
    private router: Router,
  ) { 
    console.log(this.notice);
  }

  navigateToUser(userId: string): void {
    this.router.navigateByUrl(`profile/${userId}`);
  }
  
  handleToBack(): void {
    const pathUrl = this.location.path().split('/')[2];
    const urlBack = `/channels/${pathUrl}`;

    this.router.navigateByUrl(urlBack);
  }
}
