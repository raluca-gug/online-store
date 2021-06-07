import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);
const cartModule = () =>
  import('./cart/cart.module').then((x) => x.CartModule);

const routes: Routes = [
  { path: '', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  { path: 'account', loadChildren: accountModule },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
  { path: 'cart', loadChildren: cartModule },
  { path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
