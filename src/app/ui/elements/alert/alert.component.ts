import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NotificationsEnum } from 'src/app/core/enums/notifications.enum';

@Component({
  selector: 'mr-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() type: NotificationsEnum = NotificationsEnum.info;
  @Input() text: string | undefined;
  @Input() icon: string | undefined;
}
