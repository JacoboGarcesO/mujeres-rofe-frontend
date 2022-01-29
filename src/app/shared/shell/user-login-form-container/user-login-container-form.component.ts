import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { UserCredentialsModel } from 'src/app/core/models/user-credentials.model';
import { UserLoginContainerFacade } from './user-login-container-form.facade';

@Component({
  selector: 'mr-user-login-container',
  templateUrl: './user-login-container-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoginFormContainerComponent implements OnInit, OnDestroy{
  constructor(private facade: UserLoginContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubscriptions();
  }
  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  handleLogin(userCredentials: UserCredentialsModel) {
    this.facade.handleLogin(userCredentials);
  }
}
