import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() auto = false;
  public isOpen = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.cdRef.markForCheck();
  }
}
