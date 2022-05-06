import { Injectable } from '@angular/core';
import { OptionModel } from '../models/option.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToOptionMapper {
  map(results: any[], idField = 'id', labelField = 'name'): OptionModel[] {
    return results?.map((result)=> ({
      id: `${result?.[idField]}`,
      label: `${result?.[labelField]}`,
    }));
  }
}
