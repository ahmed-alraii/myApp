import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:'' , component:MainLayoutComponent , children : [

    {path:'' ,  redirectTo: 'home' ,  pathMatch : 'full'},
    {path:'home' , component: HomeComponent},
    {path:'orders' , component: ProductListComponent},
    {path:'orders/:id' , component: ProductDetailsComponent},
    {path:'login' , component: LoginComponent , } ,
   
  ]},

 // {path:'login' , component: LoginComponent , } ,
  {path:'**' ,component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
