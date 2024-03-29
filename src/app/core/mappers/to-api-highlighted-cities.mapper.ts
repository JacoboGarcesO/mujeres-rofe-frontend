import { Injectable } from '@angular/core';
import { OptionModel } from '../models/option.model';

@Injectable({
  providedIn: 'root',
})
export class ToApiHighlightedCitiesMapper {
  map(city: OptionModel): any {
    return {
      _id: parseInt(city?.id),
      name: city?.label,
    };
  }
}
