import { Injectable } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { SlideModel } from 'src/app/core/models/slide.model';
import { UserModel } from 'src/app/core/models/user.model';
import { SlidesService } from 'src/app/core/services/slides.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class HomeContentContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private service: SlidesService,
  ) { }

  //#region Observables 
  currentUser$(): Observable<UserModel> {
    return this.state.users.currentUser.$();
  }

  slides$(): Observable<SlideModel[]> {
    return this.state.slides.slides.$();
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
    this.subscriptions.add(
      this.service.getAll().pipe(
        tap(this.state.slides.slides.set.bind(this)),
      ).subscribe(),
    );
  }

  destroySlides(): void {
    this.state.slides.slides.set(null);
  }
  //#endregion
}
