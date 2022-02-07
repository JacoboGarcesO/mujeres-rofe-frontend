import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { HomeContentContainerFacade } from './home-content-container.facade';

@Component({
  selector: 'mr-home-content-container',
  templateUrl: './home-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContentContainerComponent implements OnInit {
  public currentUser$: Observable<CurrentUserModel> | undefined;

  constructor(private facade: HomeContentContainerFacade) { }

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  handleUpdateUser(user: CurrentUserModel): void {
    this.facade.update(user);
  }

  private initializeSubscriptions(): void {
    this.currentUser$ = this.facade.currentUser$();
  }
}
