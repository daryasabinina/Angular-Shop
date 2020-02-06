import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverElementDirective {

  @HostBinding('style.background') private background;

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.background = 'lightgreen';
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.background = 'transparent';
  }

}
