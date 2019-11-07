import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'simpleName'
})
export class NamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const re = /_/gi;
    return value.toString()
      .replace(re, ' ')
      .split(' ')
      .map(w => {
        return w === 'API' ? w : w[0].toUpperCase() + w.substr(1).toLowerCase();
      })
      .join(' ');
  }
}
