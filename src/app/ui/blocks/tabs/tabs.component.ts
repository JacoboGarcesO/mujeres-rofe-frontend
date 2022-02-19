import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { TabEnum } from 'src/app/core/enums/tab.enum';
import { TabModel } from '../../../core/models/tab.model';

@Component({
  selector: 'mr-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {
  @Input() items: TabModel[];
  public active: TabEnum;

  ngOnInit(): void {
    this.initilizeActiveTab();
  }

  toggleTab(tab: TabEnum): void {
    this.setActiveTab(tab);
  }

  private initilizeActiveTab(): void {
    this.setActiveTab(this.items?.[0]?.target);
  }

  private setActiveTab(target: TabEnum): void {
    this.active = target;
  }
}
