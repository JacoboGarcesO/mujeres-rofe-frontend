import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mr-login-aside',
  templateUrl: './login-aside.component.html',
  styleUrls: ['./login-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginAsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
