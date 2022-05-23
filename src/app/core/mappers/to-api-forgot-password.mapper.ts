import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToApiForgotPasswordMapper {
  map(value: string): any {
    return {
      email: value,
    };
  }
}
