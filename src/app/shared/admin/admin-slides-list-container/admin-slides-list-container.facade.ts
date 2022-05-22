import { Injectable } from '@angular/core';
import { catchError, EMPTY, finalize, Observable, Subscription, tap } from 'rxjs';
import { SlideModel } from 'src/app/core/models/slide.model';
import { SlidesService } from 'src/app/core/services/slides.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AdminSlidesListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: SlidesService,
  ) { }

  //#region Observables
  slides$(): Observable<SlideModel[]> {
    return this.state.slides.slides.$();
  }

  slide$(): Observable<SlideModel> {
    return this.state.slides.slideToUpdate.$();
  }

  canCloseModal$(): Observable<boolean> {
    return this.state.resources.canCloseModal.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadSlides(): void {
    this.destroySlides();
    this.subscriptions.add(
      this.service.getAll().pipe(
        tap(this.state.slides.slides.set.bind(this)),
      ).subscribe(),
    );
  }

  destroySlides(): void {
    this.state.slides.slides.set(null);
  }

  destroyCanCloseModal(): void {
    this.state.resources.canCloseModal.set(null);
  }


  sendForm(slide: SlideModel): void {
    slide.id ? this.updateSlide(slide) : this.createSlide(slide);
  }

  loadSlide(slideId: string): void {    
    this.destroySlide();
    const slide = this.state.slides.slides.snapshot().find((slide) => slide.id === slideId);
    this.state.slides.slideToUpdate.set(slide);
  }

  destroySlide(): void {
    this.state.slides.slideToUpdate.set(null);
  }

  deleteSlide(slideId: string): void {
    this.notify('init');
    const callback = this.loadSlides.bind(this);
    this.subscriptions.add(
      this.service.delete(slideId).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }
  //#endregion
  //#region Private Methods
  private createSlide(slide: SlideModel): void {
    this.notify('init');
    const callback = this.loadSlides.bind(this);
    this.subscriptions.add(
      this.service.create(slide).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  private updateSlide(slide: SlideModel): void {
    this.notify('init');
    const callback = this.loadSlides.bind(this);
    this.subscriptions.add(
      this.service.update(slide).pipe(
        tap(this.notify.bind(this, 'complete', callback)),
        tap(this.storeCanCloseModal.bind(this, true)),
        catchError(this.notify.bind(this, 'error', null)),
        finalize(this.notifyClose.bind(this)),
      ).subscribe(),
    );
  }

  private storeCanCloseModal(value: boolean): void {
    this.state.resources.canCloseModal.set(value);
  }

  private notify(
    key: 'init' | 'complete' | 'error',
    callback: () => void = null,
  ): Observable<never> {
    const messages = {
      init: 'Estamos procesando su solicitud',
      complete: 'Su solicitud se completó con éxito',
      error: 'El proceso que solicitaste falló, inténtalo de nuevo más tarde',
    };

    this.state.notifications.notification.set(messages[key]);

    // eslint-disable-next-line angular/timeout-service
    if (!!callback && !(callback instanceof Observable)) { setTimeout(() => callback(), 2000); }
    return EMPTY;
  }

  private notifyClose(callback: () => void = null): void {
    if (this.canClose()) {
      // eslint-disable-next-line angular/timeout-service
      setTimeout(() => {
        this.state.notifications.notification.set(null);
        if (callback) { callback(); }
      }, 5000);
    }
  }

  private canClose(): boolean {
    const lastMessage = this.state.notifications.notification.snapshot();
    const errorMessage = 'La solicitud falló';
    return !lastMessage?.startsWith(errorMessage);
  }
  //#endregion
}
