import { Injectable } from '@angular/core';
import * as lz from 'lz-string';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  get<T>(uid: string): T {
    const itemStorage = localStorage.getItem(uid);
    const dataToParse = environment.production
      ? itemStorage && lz.decompress(itemStorage)
      : itemStorage;

    return JSON.parse(dataToParse as string);
  }

  set<T>(uid: string, data: T): void {
    const dataToStore = environment.production
      ? lz.compress(JSON.stringify(data))
      : JSON.stringify(data);

    return localStorage.setItem(uid, dataToStore);
  }

  remove(uid: string): void {
    return localStorage.removeItem(uid);
  }

}
