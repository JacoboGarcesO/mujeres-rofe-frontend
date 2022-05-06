import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';
import { SlideModel } from '../models/slide.model';

@Injectable({
  providedIn: 'root',
})
export class SlidesSatate {
  private slides$: BehaviorSubject<SlideModel[]> = new BehaviorSubject(null);
  private slideToUpdate$: BehaviorSubject<SlideModel> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      slides: this.factory.state(this.slides$),
      slideToUpdate: this.factory.state(this.slideToUpdate$),
    };
  }
}
