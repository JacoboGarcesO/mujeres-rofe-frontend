import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const textLower = value?.toString().toLowerCase();
    const textCapitalize = textLower?.charAt(0).toUpperCase() + textLower?.slice(1);
    return textCapitalize;
  }

}
