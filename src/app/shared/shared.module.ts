import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HoverElementDirective } from './derectives/hover-element.directive';
import { FontClickDirective } from './derectives/font-click.directive';

import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import ConstantService from './services/constant.service';
import { GeneratorService } from './services/generator.service';

import { OrderByPipe } from './pipes/order-by.pipe';

const ConstService = new InjectionToken<string>('ConstService');

@NgModule({
  declarations: [HoverElementDirective, FontClickDirective, OrderByPipe],
  exports: [HoverElementDirective, FontClickDirective, OrderByPipe, CommonModule, FormsModule],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstService, useValue: ConstantService},
    GeneratorService
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class SharedModule { }
