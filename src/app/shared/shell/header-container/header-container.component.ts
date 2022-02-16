import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { HeaderContainerFacade } from './header-container.facade';

@Component({
  selector: 'mr-header-container',
  templateUrl: './header-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent implements OnInit, OnDestroy {
  public currentUser$: Observable<CurrentUserModel>;
  public channels$: Observable<ChannelModel[]>;

  constructor(private facade: HeaderContainerFacade) { }
  
  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadChannels();
    this.initializeSubscriptions();
  }
  
  ngOnDestroy(): void {
    this.facade.destroyChannels();
    this.facade.destroySubscriptions();
  }

  handleLogout(): void {
    this.facade.logoutUser();
  }

  private initializeSubscriptions(): void {
    this.currentUser$ = this.facade.currentUser$();
    this.channels$ = this.facade.channels$();
  }
}

