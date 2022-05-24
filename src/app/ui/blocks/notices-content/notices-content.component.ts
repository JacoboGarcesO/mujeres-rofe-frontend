import { Location } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, OnChanges, EventEmitter, Output } from '@angular/core';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { Router } from '@angular/router';
import { UserModel, UserPaginatedModel } from 'src/app/core/models/user.model';
import { OptionModel } from 'src/app/core/models/option.model';

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
  @Input() users: UserPaginatedModel;
  @Input() cities: OptionModel;
  @Output() changePagePaginated: EventEmitter<number> = new EventEmitter();
  @Output() filterByCity: EventEmitter<string> = new EventEmitter();
  @Output() filterByName: EventEmitter<string> = new EventEmitter();
  totalUsers = 0;
  totalPages = 0;

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnChanges(): void {
    this.totalUsers = this.users?.total;
    this.totalPages = Math.round(this.users?.total / 10);
  }

  get getUsers(): UserModel[] {
    return this.users?.users;
  }

  navigateToUser(userId: string): void {
    this.router.navigateByUrl(`profile/${userId}`);
  }

  handleToBack(): void {
    const pathUrl = this.location.path().split('/')[2];
    const urlBack = `/channels/${pathUrl}`;

    this.router.navigateByUrl(urlBack);
  }

  loadUsers(from: number): void {
    this.changePagePaginated.emit(from);
  }

  handleCitiesFiler({value}: {value: string}): void {
    this.filterByCity.emit(value);
  }

  handleNameFiler({value}: {value: string}): void {
    this.filterByName.emit(value);
  }
}
