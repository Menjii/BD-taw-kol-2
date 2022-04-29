import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersBDComponent } from './components/orders-bd/orders-bd.component';
import { OrdersDetailsBDComponent } from './components/orders-details-bd/orders-details-bd.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersBDComponent
  },
  {
    path: 'details/:id',
    component: OrdersDetailsBDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
