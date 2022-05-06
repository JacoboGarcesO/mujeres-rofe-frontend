import { Location } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SlideModel } from 'src/app/core/models/slide.model';
import { ModalComponent } from '../../elements/modal/modal.component';

@Component({
  selector: 'mr-admin-slides-list',
  templateUrl: './admin-slides-list.component.html',
  styleUrls: ['./admin-slides-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminSlidesListComponent {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalUpdateRef') modalUpdateRef: ModalComponent;
  @Input() slides: SlideModel[];
  @Input() slide: SlideModel;
  @Input() canResetForm: boolean;
  @Output() sendForm: EventEmitter<SlideModel> = new EventEmitter();
  @Output() loadSlide: EventEmitter<string> = new EventEmitter();
  @Output() deleteSlide: EventEmitter<string> = new EventEmitter();
  private slideId: string;

  constructor(private location: Location, private cdRef: ChangeDetectorRef) { }

  ngOnChanges(): void {
    if (!this.canResetForm) { return; }

    this.modalRef.close();
    this.modalUpdateRef.close();
    this.cdRef.detectChanges();
  }

  handleSendForm(slide: SlideModel): void {
    this.sendForm.emit(slide);
  }

  handleLoadSlide(slideId: string): void {    
    this.loadSlide.emit(slideId);
  }

  setSlideId(slideId): void {
    this.slideId = slideId;
  }

  handleDeleteSlide(): void {
    this.deleteSlide.emit(this.slideId);
  }

  handleToBack(): void {
    this.location.back();
  }
}
