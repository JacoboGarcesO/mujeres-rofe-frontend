import { Location } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, OnChanges, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { FilterModel } from 'src/app/core/models/filter.model';

@Component({
  selector: 'mr-notices-content',
  templateUrl: './notices-content.component.html',
  styleUrls: ['./notices-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoticesContentComponent implements OnChanges {
  @Input() notice: NoticeModel;
  @Input() channel: ChannelModel;
  @Input() users: UserModel[];
  @Input() totalUsers: number;
  @Input() filter: FilterModel;
  @Input() cities: OptionModel;
  @Output() filteredUsers: EventEmitter<FilterModel> = new EventEmitter();
  public totalPages = 0;

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.totalUsers) {
      this.filter = { ...this.filter, total: this.totalUsers?.toString() };
    }

    this.totalPages = Math.round(this.totalUsers / 10);
  }

  get getUsers(): UserModel[] {
    return this.users;
  }

  navigateToUser(userId: string): void {
    this.router.navigateByUrl(`profile/${userId}`);
  }

  handleToBack(): void {
    const pathUrl = this.location.path().split('/')[2];
    const urlBack = `/channels/${pathUrl}`;
    this.router.navigateByUrl(urlBack);
  }

  filterUsers(data: any): void {
    if (typeof data === "number") {
      this.filter = { ...this.filter, from: data.toString(), term: null, limit: '10' };
    } else {
      this.filter = {
        ...this.filter, term: data.firstName === "" ? null : (
          data.city ? { 'location.city': data.city } : data
        ), from: '0', limit: data.firstName === "" ? '10' : this.totalUsers?.toString()
      };
    }
    this.filteredUsers.emit(this.filter);
  }
}
