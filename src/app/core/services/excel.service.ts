import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExcelMapper } from '../mappers/excel.mapper';
import { utils, writeFileXLSX } from 'xlsx';
import { UsersService } from './users.service';
import { FilterModel } from '../models/filter.model';


@Injectable({
  providedIn: 'root',
})
export class ExcelService {

  constructor(private excelMapper: ExcelMapper, private userService: UsersService) { }

  exportUsersToExcel(filter: FilterModel): Observable<string> {
    const filterToExcel = { ...filter, limit: filter.total };
    this.userService.getUsers(filterToExcel).subscribe((response) => {
      const users = this.excelMapper.map(response?.users);
      const ws = utils.json_to_sheet(users);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, 'Mujeres');
      writeFileXLSX(wb, 'Mujeres-ROFÉ.xlsx');
    });

    return of('ok');
  }
}
