import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ForgotPasswordContainerFacade } from './forgot-password-container.facade';

@Component({
  selector: 'mr-forgot-password-container',
  templateUrl: './forgot-password-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordContainerComponent implements OnInit, OnDestroy { 
  constructor(private facade: ForgotPasswordContainerFacade) { }
  ngOnInit(): void {
    this.facade.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  handleForgotPassword(value: string): void {
    this.facade.handleForgotPassword(value);
  }
}
