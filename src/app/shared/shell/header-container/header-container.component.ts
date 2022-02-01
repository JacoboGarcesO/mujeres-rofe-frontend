import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { HeaderContainerFacade } from './header-container.facade';

@Component({
  selector: 'mr-header-container',
  templateUrl: './header-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent implements OnInit {
  public currentUser$: Observable<CurrentUserModel> | undefined;

  constructor(private facade: HeaderContainerFacade) { }

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  handleLogout(): void {
    this.facade.logoutUser();
  }

  private initializeSubscriptions(): void {
    this.currentUser$ = this.facade.currentUser$();
  }
}

