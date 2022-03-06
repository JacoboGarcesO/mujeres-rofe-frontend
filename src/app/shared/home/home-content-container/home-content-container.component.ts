import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { HomeContentContainerFacade } from './home-content-container.facade';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'mr-home-content-container',
  templateUrl: './home-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContentContainerComponent implements OnInit, OnDestroy {
  public currentUser$: Observable<UserModel>;

  constructor(private facade: HomeContentContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.currentUser$ = this.facade.currentUser$();
  }
}
