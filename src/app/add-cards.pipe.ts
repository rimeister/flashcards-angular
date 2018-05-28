import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addCards'
})
export class AddCardsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
