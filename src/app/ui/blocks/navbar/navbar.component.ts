import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { 
  public isOpen = false;

  handleClick(isOpen: boolean): void {
    this.isOpen = isOpen;
  }
}
