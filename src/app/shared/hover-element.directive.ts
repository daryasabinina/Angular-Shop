import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverElementDirective {

  @HostBinding('style.background') private background;

  @HostListener('mouseenter', ['$event'])
  enter(event: Event): void {
    this.background = 'lightgreen';
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event): void {
    this.background = 'transparent';
  }

}
