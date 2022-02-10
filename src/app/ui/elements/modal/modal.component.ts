import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() canClose = true;
  @Input() auto = false;
  public isOpen = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.cdRef.markForCheck();
  }

  open(): void {
    this.isOpen = true;
    this.cdRef.markForCheck();
  }

  close(): void {
    this.isOpen = false;
    this.cdRef.markForCheck();
  }
}
