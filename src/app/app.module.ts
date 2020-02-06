import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* modules */
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';

/* components */
import { AppComponent } from './app.component';
import { HoverElementDirective } from './shared/hover-element.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    OrderModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
