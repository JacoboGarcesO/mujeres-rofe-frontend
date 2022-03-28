import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeModel } from 'src/app/core/models/notice.model';

@Component({
  selector: 'mr-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoticeComponent { 
  @Input() notice: NoticeModel;

  constructor(
    private router: Router,
  ) { }

  navigateToNotice(): void {
    if (this.notice?.formId) { 
      this.router.navigateByUrl(`forms/${this.notice?.formId}`);
      return;
    }

    this.router.navigateByUrl(`notices/${this.notice?.channel}/${this.notice?.id}`);
  }
}
