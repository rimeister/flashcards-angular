import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addCards'
})
export class AddCardsPipe implements PipeTransform {

	transform(pipeData): any {
    	return pipeData;
	}

	/*  transform(value: any, args?: any): any {
	    return null;
	  }
	*/
}
