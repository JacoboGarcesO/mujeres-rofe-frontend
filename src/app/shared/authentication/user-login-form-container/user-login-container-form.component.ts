import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentialsModel } from 'src/app/core/models/user-credentials.model';
import { UserModel } from 'src/app/core/models/user.model';
import { UserLoginContainerFacade } from './user-login-container-form.facade';

@Component({
  selector: 'mr-user-login-container',
  templateUrl: './user-login-container-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginFormContainerComponent implements OnInit, OnDestroy{
  public currentUser$: Observable<UserModel>;
  public formNotification$: Observable<string>;

  constructor(private facade: UserLoginContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyFormNotification();
    this.facade.destroySubscriptions();
  }

  handleLogin(userCredentials: UserCredentialsModel) {
    this.facade.handleLogin(userCredentials);
  }

  private initializeSubscriptions(): void {
    this.currentUser$ = this.facade.currentUser$();
    this.formNotification$ = this.facade.formNotification$();
  }
}
