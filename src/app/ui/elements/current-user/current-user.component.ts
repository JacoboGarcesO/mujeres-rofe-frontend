import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mr-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
