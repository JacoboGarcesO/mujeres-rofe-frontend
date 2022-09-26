import { Injectable } from '@angular/core';
import { FilterModel } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class FilterParser {

  dataToUrl(filter: FilterModel): string {
    let url = '';    

    if (filter?.term) { url += `&term=${JSON.stringify(filter?.term)}`; }
    if (filter?.total) { url += `&total=${filter?.total}`; }
    if (filter?.limit) { url += `&limit=${filter?.limit}`; }
    if (filter?.from) { url += `&from=${filter?.from}`; }
    if (filter?.sort) { url += `&sort=${JSON.stringify(filter?.sort)}`; }

    return url;
  }

  urlToData(path: string): FilterModel {
    const params = this.getParams(path);
    const data = {} as FilterModel;

    if (params.get('term')) { data.term = JSON.parse(params.get('term')); }
    if (params.get('total')) { data.total = params.get('total'); }
    if (params.get('limit')) { data.limit = params.get('limit'); }
    if (params.get('from')) { data.from = params.get('from'); }
    if (params.get('sort')) { data.sort = JSON.parse(params.get('sort')); }

    return data;
  }

  private getParams(url: string): URLSearchParams {
    const [_, query] = url.split('?');
    return new URLSearchParams(query);
  }

}
