import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TabModel } from '../../../core/models/tab.model';

@Component({
  selector: 'mr-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent{
  @Input() items: TabModel[];
}
