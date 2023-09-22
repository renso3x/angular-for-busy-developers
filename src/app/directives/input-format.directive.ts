import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFile]'
})
export class InputFormatDirective {
  @Input('appInputFile') format = '';

  constructor(private el: ElementRef) { 
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value
    if (this.format === 'lowercase') {
      return  this.el.nativeElement.value = value.toLowerCase()
      
    }
    return this.el.nativeElement.value = value.toUpperCase()
  }
}
