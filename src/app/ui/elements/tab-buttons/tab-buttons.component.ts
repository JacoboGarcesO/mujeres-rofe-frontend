import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TabModel } from '../../../core/models/tab.model';

@Component({
  selector: 'mr-tab-buttons',
  templateUrl: './tab-buttons.component.html',
  styleUrls: ['./tab-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabButtonsComponent { 
  @Input() items: TabModel[];
}
