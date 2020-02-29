import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverElementDirective } from './hover-element.directive';
import { FontClickDirective } from './font-click.directive';

import { LocalStorageService } from './local-storage.service';
import { ConfigOptionsService } from './config-options.service';
import ConstantService from './constant.service';
import { GeneratorService } from './generator.service';

const ConstService = new InjectionToken<string>('ConstService');

@NgModule({
  declarations: [HoverElementDirective, FontClickDirective],
  exports: [HoverElementDirective, FontClickDirective],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstService, useValue: ConstantService},
    GeneratorService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
