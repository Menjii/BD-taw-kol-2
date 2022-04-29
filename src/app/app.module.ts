import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersBDComponent } from './components/orders-bd/orders-bd.component';
import { OrdersItemBDComponent } from './components/orders-item-bd/orders-item-bd.component';
import { OrdersDetailsBDComponent } from './components/orders-details-bd/orders-details-bd.component';
import { HttpClientModule } from '@angular/common/http';
import { BDDataService } from './services/bd-data.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersBDComponent,
    OrdersItemBDComponent,
    OrdersDetailsBDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BDDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
