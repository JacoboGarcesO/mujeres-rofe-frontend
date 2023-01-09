import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errors'
})
export class ErrorsPipe implements PipeTransform {

  transform(value: string): string {
     const errors = {
      required: 'Campo obligatorio.',
      fileSizeOutRange: 'El tamaño del archivo excede los 10mb.',
      emailFormatWrong: 'Formato incorrecto.',
     };

     return errors[value];
  }
}
