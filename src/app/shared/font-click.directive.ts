import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontClick]'
})
export class FontClickDirective {
  @Input('appFontClick') newfontsize: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}


  @HostListener('click', ['$event']) onClick(event: Event) {
    this.changeFont(this.newfontsize);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
    this.resetFont();
  }

  private changeFont(fontsize: string): void {
    this.el.nativeElement.style.fontSize = fontsize;
  }

  private resetFont(): void {
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '16px');
  }
}
