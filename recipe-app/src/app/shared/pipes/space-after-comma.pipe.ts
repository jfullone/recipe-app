import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceAfterComma',
})
export class SpaceAfterComma implements PipeTransform {
  transform(arr: string[]): string {
    if (arr.length > 1) {
      return arr.join(', ');
    } else if (arr.length === 1) {
      return arr[0] + ',';
    } else {
      return '';
    }
  }
}
