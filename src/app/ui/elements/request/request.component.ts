import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormRequestModel } from 'src/app/core/models/form-requests.model';

@Component({
  selector: 'mr-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestComponent {
  @Input() request: FormRequestModel;
  @Output() clickedDelete: EventEmitter<string> = new EventEmitter();

  handleDeleteRequest(): void {
    this.clickedDelete.emit(this.request.id);
  }
}
