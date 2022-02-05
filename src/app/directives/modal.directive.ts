import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.display= 'block'
   }
   @HostListener ('click') onClick(){
     this.elementRef.nativeElement.style.display='none'
   }

}
