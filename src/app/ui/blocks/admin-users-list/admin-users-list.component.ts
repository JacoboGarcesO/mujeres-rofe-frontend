import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { UserModel, UserPaginatedModel } from 'src/app/core/models/user.model';
import { OptionModel } from '../../../core/models/option.model';
import { ModalComponent } from '../../elements/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'mr-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminUsersListComponent implements OnChanges {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @ViewChild('modalUpdateRef') modalUpdateRef: ModalComponent;
  @Input() users: UserPaginatedModel;
  @Input() userToUpdate: UserModel;
  @Input() hobbies: OptionModel[];
  @Input() states: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() documents: OptionModel[];
  @Input() education: OptionModel[];
  @Input() ethnicGroups: OptionModel[];
  @Input() familyCore: OptionModel[];
  @Input() familyIncome: OptionModel[];
  @Input() housingType: OptionModel[];
  @Input() maritalStatus: OptionModel[];
  @Input() stratum: OptionModel[];
  @Input() sustenting: OptionModel[];
  @Input() canCloseModal: boolean;
  @Input() disclosures: OptionModel[];
  @Output() stateSelected: EventEmitter<string> = new EventEmitter();
  @Output() createUser: EventEmitter<UserModel> = new EventEmitter();
  @Output() updateUser: EventEmitter<UserModel> = new EventEmitter();
  @Output() deleteUser: EventEmitter<string> = new EventEmitter();
  @Output() loadUserToUpdate: EventEmitter<string> = new EventEmitter();
  @Output() downloadUsers: EventEmitter<string> = new EventEmitter();
  @Output() changePagePaginated: EventEmitter<number> = new EventEmitter();
  @Output() filterByName: EventEmitter<string> = new EventEmitter();
  private currentUser: UserModel;
  private userId: string;
  totalUsers = 0;
  totalPages = 0;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnChanges(): void {
    this.totalUsers = this.users?.total;
    this.totalPages = Math.round(this.users?.total / 10);

    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.modalDeleteRef.close();
    this.modalUpdateRef.close();
    this.cdRef.detectChanges();
  }

  get getUsers(): UserModel[] {
    return this.users?.users;
  }

  handleLoadUsers(from: number): void {
    this.changePagePaginated.emit(from);
  }

  handleCreateUser(user: UserModel): void {
    this.createUser.emit(user);
  }

  handleUpdateUser(user: UserModel): void {
    this.updateUser.emit(user);
  }

  handleDeleteUser(): void {
    this.deleteUser.emit(this.userId);
  }

  handleSelectState(formUpdate: UserModel): void {
    if (formUpdate?.location?.state && (formUpdate?.location?.state !== this.currentUser?.location?.state)) {
      this.stateSelected.emit(formUpdate?.location?.state);
    }

    this.currentUser = { ...formUpdate };
  }

  handleNameFiler({value}: {value: string}): void {
    this.filterByName.emit(value);
  }

  setUserId(userId: string): void {
    this.userId = userId;
  }

  handleLoadUserToUpdate(userId: string): void {
    this.loadUserToUpdate.emit(userId);
  }

  handleToBack(): void {
    this.router.navigateByUrl('');
  }

  handleDownloadUsers(): void {
    this.downloadUsers.emit();
  }
}
