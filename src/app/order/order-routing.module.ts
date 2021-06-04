import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'success', component: PaymentSuccessComponent },
  { path: 'failure', component: PaymentFailureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
