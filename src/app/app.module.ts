import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { PositiveValueDirective } from './directives/positive-value.directive';
import { UsdToRialPipe } from './pips/usd-to-rial.pipe';
import { OrderMasterComponent } from './components/order/order-master/order-master.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ProductListComponent,
    HighlightDirective,
    PositiveValueDirective,
    UsdToRialPipe,
    OrderMasterComponent,
    LoginComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
