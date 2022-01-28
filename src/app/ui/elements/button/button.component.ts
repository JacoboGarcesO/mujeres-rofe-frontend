import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mr-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() display: 'block' | 'inline' = 'inline';
  @Input() isDisabled = false;
  @Input() label: string | undefined;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  handleClick(): void {
    this.clicked.emit();
  }
}
