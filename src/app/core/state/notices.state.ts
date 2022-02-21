import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';
import { NoticeModel } from '../models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class NoticesState {
  private notices$: BehaviorSubject<NoticeModel[]> = new BehaviorSubject(null);
  private notice$: BehaviorSubject<NoticeModel> = new BehaviorSubject(null);
  private currentNoticeToUpdate$: BehaviorSubject<NoticeModel> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) { }

  store() {
    return {
      notices: this.factory.state(this.notices$),
      notice: this.factory.state(this.notice$),
      currentNoticeToUpdate: this.factory.state(this.currentNoticeToUpdate$),
    };
  }
}
