import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {

  transform(image: any): string {
    return image ? image : 'assets/img/noimage.png';    
  }
}
