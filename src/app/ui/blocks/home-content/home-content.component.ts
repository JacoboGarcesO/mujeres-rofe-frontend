import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ViewChild, AfterViewInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { ModalComponent } from '../../elements/modal/modal.component';

@Component({
  selector: 'mr-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HomeContentComponent implements AfterViewInit {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @Input() currentUser: CurrentUserModel;
  @Output() userUpdated: EventEmitter<CurrentUserModel> = new EventEmitter();

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {  
    if (this.currentUser?.isPending) {
      this.modalRef.toggle();  
      this.cdRef.detectChanges();   
    }
  }

  handleUpdateUser(user: CurrentUserModel): void {
    this.userUpdated.emit(user);
  }
}
