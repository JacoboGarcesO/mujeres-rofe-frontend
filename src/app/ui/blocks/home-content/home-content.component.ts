import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'mr-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HomeContentComponent { 
  constructor(private router: Router) { }

  navigateToChannel(url: string): void {
    this.router.navigateByUrl(url);
  }
}
