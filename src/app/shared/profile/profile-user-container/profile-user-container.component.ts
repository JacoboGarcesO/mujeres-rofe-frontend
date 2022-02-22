import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { ProfileUserContainerFacade } from './profile-user-container.facade';

@Component({
  selector: 'mr-profile-user-container',
  templateUrl: './profile-user-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileUserContainerComponent implements OnInit, OnDestroy {
  public user$: Observable<UserModel>;

  constructor(
    private facade: ProfileUserContainerFacade,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const { userId } = this.route.snapshot.params;
    this.initializeSubscriptions();
    this.facade.initSubscriptions();
    this.facade.loadUser(userId);
  }

  ngOnDestroy(): void {
    this.facade.destroyUser();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.user$ = this.facade.user$();
  }
}
