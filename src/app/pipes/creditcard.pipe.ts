import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {

  transform(cardnumber: string): string {
   
    //return cardnumber.replace(/\s+/g, '').replace(/(\d{4})/g, '$1-').trim();
   return cardnumber.toString().split("").map((num,i)=>(!i||i%4?"":"-")+num).join("")
  }

}
