import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProfileUserComponent {
  @Input() user: UserModel;  

  constructor(
    private router: Router,
  ) { }

  handleToBack(): void {
    this.router.navigateByUrl('/channels/network');
  }
}
