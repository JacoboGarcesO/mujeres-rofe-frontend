import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CurrentUserModel } from './core/models/current-user.model';
import { CurrentUserService } from './core/services/current-user.service';
import { AppState } from './core/state/app.state';

@Component({
  selector: 'mr-root',
  template: '<ng-container><router-outlet></router-outlet></ng-container>',
})
export class AppComponent implements OnInit { 
  constructor(
    private appState: AppState,
    private currentUserService: CurrentUserService,
  ) { }

  ngOnInit(): void {
    this.initializeUser();
  }

  private initializeUser(): void {
    this.currentUserService.getCurrentUser().pipe(
      tap(this.storeCurrentUser.bind(this)),
    ).subscribe();
  }

  private storeCurrentUser(currentUser: CurrentUserModel): void {   
    this.appState.users.currentUser.set(currentUser);
  }
}
