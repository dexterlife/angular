import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('style.borderColor')
  borderColor = 'transparent';

  constructor() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.borderColor = 'blue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.borderColor = 'blue';
  }
}
