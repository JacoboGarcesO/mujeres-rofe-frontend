import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TabEnum } from 'src/app/core/enums/tab.enum';
import { TabModel } from '../../../core/models/tab.model';

@Component({
  selector: 'mr-tab-buttons',
  templateUrl: './tab-buttons.component.html',
  styleUrls: ['./tab-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabButtonsComponent implements OnInit { 
  @Input() items: TabModel[];
  @Output() clicked: EventEmitter<string> = new EventEmitter();
  public tabActive: TabEnum;

  ngOnInit(): void {
    this.initializeActiveItem();
  }

  handleClick(tab: TabEnum): void {
    this.tabActive = tab;
    this.clicked.emit(tab);
  }

  private initializeActiveItem(): void {
    this.tabActive = this.items?.[0]?.target;
  }
}
