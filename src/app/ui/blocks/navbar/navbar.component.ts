import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';

@Component({
  selector: 'mr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent { 
  @Input() currentUser: CurrentUserModel | undefined;
  @Output() clickedLogout: EventEmitter<void> = new EventEmitter();

  public isOpen = false;

  handleClick(isOpen: boolean): void {
    this.isOpen = isOpen;
  }

  handleLogout(): void {
    this.clickedLogout.emit();
  }
}
