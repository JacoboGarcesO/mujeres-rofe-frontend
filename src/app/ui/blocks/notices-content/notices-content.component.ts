import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
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
export class NoticesContentComponent {
  @Input() notice: NoticeModel;
  @Input() channel: ChannelModel;
  @Input() users: UserModel[];
  @Input() filter: FilterModel;
  @Input() cities: OptionModel;
  @Output() filteredUsers: EventEmitter<FilterModel> = new EventEmitter();

  get pages(): number {
    console.log(this.filter);
    
    return Math.ceil(this.filter.total / 10);
  }

  constructor(
    private location: Location,
    private router: Router,
  ) { }

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
      : { ...this.filter, term: this.validateTerm({ ...this.filter.term, ...this.mapTerm(data) }) };
    this.filteredUsers.emit(this.filter);
  }

  private mapTerm(term: { [key: string]: string }): { [key: string]: string } | null {
    let data = {};
    Object.entries(term).forEach((entry) => {
      const [key, value] = entry;
      if (key === 'city') { return data = { ...data, 'location.city': value }; }
      data = { ...data, [key]: value };
    });
    return data;
  }

  private validateTerm(term: { [key: string]: string }): { [key: string]: string } | null {
    let data = {};
    Object.entries(term).forEach((entry) => {
      const [key, value] = entry;
      if (value) { data = { ...data, [key]: value }; }
    });
    return data;
  }
}
