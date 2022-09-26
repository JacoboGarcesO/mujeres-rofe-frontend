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

  exportUsersToExcel(filter: FilterModel = { from: '0', limit: '10', sort: { firstName: 'asc' }, term: null, total: '500' }): Observable<string> {   
    this.userService.getUsers(filter).subscribe((users) => {
      const usersMapper = this.excelMapper.map(users);
      const ws = utils.json_to_sheet(usersMapper);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, 'Mujeres');
      writeFileXLSX(wb, 'Mujeres-ROFÉ.xlsx');
    });

    return of('ok');
  }
}
