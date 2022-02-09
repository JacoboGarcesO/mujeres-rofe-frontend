import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Inject, ElementRef, ChangeDetectorRef, Renderer2, OnDestroy, ViewEncapsulation } from '@angular/core';
import { OptionModel } from 'src/app/core/models/option.model';
import { MiscUtil } from 'src/app/core/utils/misc.util';

@Component({
  selector: 'mr-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent implements OnInit, OnDestroy {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() text: string;
  @Input() options: OptionModel[];
  @Input() tabid!: string;
  @Input() canDeleteText!: boolean;
  @Output() deletedText: EventEmitter<void> = new EventEmitter();
  @Output() deselectedOption: EventEmitter<string> = new EventEmitter();
  public isVisible!: boolean;
  public uniqueId =  MiscUtil.uuid();
  private globalListenFunc!: () => void;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.bindClosest();
  }

  ngOnDestroy(): void {
    this.destroyClosest();
  }

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
    // eslint-disable-next-line angular/timeout-service
    setTimeout(() => this.animateCard());
  }

  handleKeydown(label: any): void {
    label?.click();
  }

  handleClose(): void {
    this.closeOptions();
  }

  handleDeleteText(): void {
    this.deletedText.emit();
  }

  handleDeselect(optionId: string): void {
    this.deselectedOption.emit(optionId);
  }

  private animateCard(): void {
    const viewport = this.document.querySelector('body') as HTMLElement;
    const viewportRect = viewport?.getBoundingClientRect();
    const container = this.el.nativeElement.querySelector('.dropdown') as HTMLElement;
    const containerRect = container?.getBoundingClientRect();
    const card = this.el.nativeElement.querySelector('.dropdown__floating') as HTMLElement;
    const cardRect = card?.getBoundingClientRect();

    const left = viewportRect?.width - containerRect?.left - cardRect?.width;
    const leftCard = left >= 0 ? 0 : left - 16;

    if (!card) { return; }
    this.renderer.setStyle(card, 'left', `${leftCard}px`);
    if (this.isVisible) { card.scrollIntoView(false); }
  }

  private closeOptions(): void {
    this.isVisible = false;
    this.cdRef.markForCheck();
  }

  private bindClosest(): void {
    this.globalListenFunc = this.renderer.listen('window', 'click', this.closest.bind(this));
  }

  private destroyClosest(): void {
    this.globalListenFunc();
  }

  private closest(event: MouseEvent): void {
    const target = event.target as unknown as HTMLElement;
    const closest = target.closest(`.closest__${this.uniqueId}`);
    if (!closest) { this.closeOptions(); }
  }
}
