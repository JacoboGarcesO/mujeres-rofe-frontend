import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelModel } from 'src/app/core/models/channel.model';
import { FilterModel } from 'src/app/core/models/filter.model';
import { NoticeModel } from 'src/app/core/models/notice.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';

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
  @Input() filter: FilterModel;
  @Input() cities: OptionModel;
  @Output() filteredUsers: EventEmitter<FilterModel> = new EventEmitter();
  public totalPages = 0;

  get pages(): number {
    return this.totalPages;
  }

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnChanges(): void {    
    this.totalPages = Math.ceil(this.filter.total / 10);
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
    this.filter = typeof data === "number"
      ? { ...this.filter, from: data }
      : { ...this.filter, term: data.firstName === "" ? null : data };
    this.filteredUsers.emit(this.filter);
  }
}
