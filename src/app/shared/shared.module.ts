import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverElementDirective } from './hover-element.directive';

@NgModule({
  declarations: [HoverElementDirective],
  exports: [HoverElementDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
