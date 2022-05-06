import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SlideModel } from 'src/app/core/models/slide.model';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'mr-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HomeContentComponent { 
  @Input() currentUser: UserModel;
  @Input() slides: SlideModel[];

  constructor(private router: Router) { }

  navigateToChannel(url: string): void {
    this.router.navigateByUrl(url);
  }
}
