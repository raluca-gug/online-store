import { AuthGuard } from './account/auth.guard';
import { NgModule,} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);
const cartModule = () => import('./cart/cart.module').then((x) => x.CartModule);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  { path: 'account', loadChildren: accountModule },
  {
    path: 'order',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  { path: 'cart', loadChildren: cartModule },  
  { path: '',
	  redirectTo: 'favorites', pathMatch: 'full'},
  {
    path: 'service',
    loadChildren: () =>
      import('./service/service.module').then((m) => m.ServiceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
