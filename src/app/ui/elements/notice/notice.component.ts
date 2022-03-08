import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoticeComponent { 
  @Input() image: string;
  @Input() title: string;
  @Input() description: string;
  @Input() channel: string;
  @Input() isLink: boolean;
  @Input() url: string;
  @Input() id: string;

  constructor(
    private router: Router,
  ) { }

  navigateToNotice(channel: string, id: string): void {
    this.router.navigateByUrl(`notices/${channel}/${id}`);
  }
}
