import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {
  
  transform(value: string): string {
    let year= +value.toString().slice(1,3),
    month= +value.toString().slice(3,5),
    day=+value.toString().slice(5,7)
   
    return `${year} - ${month} - ${day}`;
  }

}
