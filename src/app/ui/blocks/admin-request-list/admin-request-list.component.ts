import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminRequestListComponent {
  @Input() requests: FormRequestModel[];
  @Output() clickedDelete: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  handleToBack(): void {
    this.router.navigateByUrl('');
  }

  handleDeleteRequest(requestId: string): void {
    this.clickedDelete.emit(requestId);
  }
}
