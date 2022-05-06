import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { SlideModel } from 'src/app/core/models/slide.model';
import { AdminSlidesListContainerFacade } from './admin-slides-list-container.facade';

@Component({
  selector: 'mr-admin-slides-list-container',
  templateUrl: './admin-slides-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSlidesListContainerComponent implements OnInit, OnDestroy {
  public slides$: Observable<SlideModel[]>;
  public slide$: Observable<SlideModel>;
  public canCloseModal$: Observable<boolean>;

  constructor(private facade: AdminSlidesListContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadSlides();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySlides();
    this.facade.destroyCanCloseModal();
    this.facade.destroySubscriptions();
  }

  handleSendForm(slide: SlideModel): void {
    this.facade.sendForm(slide);
  }

  handledLoadSlide(slideId: string): void {
    this.facade.loadSlide(slideId);
  }

  handleDeleteSlide(slideId: string): void {
    this.facade.deleteSlide(slideId);
  }

  private initializeSubscriptions(): void {
    this.slides$ = this.facade.slides$();
    this.slide$ = this.facade.slide$();
    this.canCloseModal$ = this.facade.canCloseModal$();
  }
}
