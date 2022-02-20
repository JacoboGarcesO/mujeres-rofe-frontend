import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CurrentUserModel } from '../../../core/models/current-user.model';
import { OptionModel } from '../../../core/models/option.model';
import { ModalComponent } from '../../elements/modal/modal.component';

@Component({
  selector: 'mr-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersListComponent implements OnChanges{
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @Input() users: CurrentUserModel[];
  @Input() hobbies: OptionModel[];
  @Input() states: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() canCloseModal: boolean;
  @Output() stateSelected: EventEmitter<string> = new EventEmitter();
  @Output() createUser: EventEmitter<CurrentUserModel> = new EventEmitter();
  @Output() deleteUser: EventEmitter<string> = new EventEmitter();
  private userId: string;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }
    
    this.modalRef.close();
    this.modalDeleteRef.close();
    this.cdRef.detectChanges();
  } 

  handleCreateUser(user: CurrentUserModel): void {
    this.createUser.emit(user);
  }

  handleDeleteUser(): void {
    this.deleteUser.emit(this.userId);
  }

  handleSelectState(stateId: string): void {
    this.stateSelected.emit(stateId);
  }

  setUserId(userId: string): void {
    this.userId = userId;
  }
}
