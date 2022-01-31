import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mr-button-burguer',
  templateUrl: './button-burguer.component.html',
  styleUrls: ['./button-burguer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonBurguerComponent {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();
  public isOpen = false;
  public icon = 'bars';

  handleClick(): void {
    this.icon = this.isOpen ? 'bars' : 'times';
    this.isOpen = !this.isOpen;
    this.clicked.emit(this.isOpen);
  }
}
