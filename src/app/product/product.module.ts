import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ProductService],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
