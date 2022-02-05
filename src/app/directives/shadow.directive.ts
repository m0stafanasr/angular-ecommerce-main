import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
  @Input('appShadow') highlightColor:string = "orange";
 
  @Input() defaultColor:string = "grey";
  constructor(private elref:ElementRef) {  
    this.elref.nativeElement.style.boxShadow=`1px 1px 3px 1px ${this.defaultColor}` ;
    
  }
  
  @HostListener('mouseover')  onMouseOver(){
      this.elref.nativeElement.style.boxShadow=`1px 1px 5px 4px ${this.highlightColor}`;
      
    }
    @HostListener('mouseout')  onMouseOut(){
      this.elref.nativeElement.style.boxShadow=`1px 1px 3px 1px ${this.defaultColor}`;
      
    }

  }
