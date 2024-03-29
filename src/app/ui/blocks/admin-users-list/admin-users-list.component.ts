import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FilterModel } from 'src/app/core/models/filter.model';
import { UserModel } from 'src/app/core/models/user.model';
import { OptionModel } from '../../../core/models/option.model';
import { ModalComponent } from '../../elements/modal/modal.component';

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
  @Input() users: UserModel[];
  @Input() filter: FilterModel;
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
  @Output() filteredUsers: EventEmitter<FilterModel> = new EventEmitter();
  private currentUser: UserModel;
  private userId: string;

  get pages(): number {
    return Math.ceil(this.filter.total / 10);
  }

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.modalDeleteRef.close();
    this.modalUpdateRef.close();
    this.cdRef.detectChanges();
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

  filterUsers(data: any): void {
    this.filter = typeof data === "number"
      ? { ...this.filter, from: data }
      : { ...this.filter, term: data.firstName === "" ? null : data };
    this.filteredUsers.emit(this.filter);
  }
}
