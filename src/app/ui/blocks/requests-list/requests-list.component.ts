import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestsListComponent {
  @Input() requests: FormRequestModel[];
  @Output() clickedDelete: EventEmitter<string> = new EventEmitter();

  handleDeleteRequest(requestId: string): void {
    this.clickedDelete.emit(requestId);
  }
}
