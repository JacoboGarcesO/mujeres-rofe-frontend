import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TabModel } from '../models/tab.model';
import { TabEnum } from '../enums/tab.enum';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  
  getTabs(): Observable<TabModel[]> {
    const tabs = [
      { label: 'Usuarias', icon: 'fas fa-female', target: TabEnum.users },
      { label: 'Comunicados', icon: 'fas fa-newspaper', target: TabEnum.notices },
    ];

    return of(tabs);
  }
}
