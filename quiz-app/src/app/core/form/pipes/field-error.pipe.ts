import { AbstractControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFieldHasError',
  pure: false
})
export class FieldErrorPipe implements PipeTransform {
  transform(field: AbstractControl, validationType: string) {
    const result = field.hasError(validationType) && (field.dirty || field.touched);
    return result;
  }
}
