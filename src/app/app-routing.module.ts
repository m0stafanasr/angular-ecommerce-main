import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './components/add-new/add-new.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { MainOrderComponent } from './main-order/main-order.component';
import { MainpageComponent } from './mainpage/mainpage.component';
const routes: Routes = [
  {path: '', component:MainpageComponent, children:[
    {path:'',redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: MainpageComponent},
    {path:'profile', component:ProfileComponent},
    {path:'products', component: ProductsComponent,  canActivate:[AuthGuard]},
    {path:'mainpage', component: MainOrderComponent,  canActivate:[AuthGuard]},
    {path:'products/:id', component: ProductDetailsComponent}
  ]},
  {path:'edit',pathMatch:"full", component: AddNewComponent, canActivate:[AuthGuard]},
  {path:'edit/:id', component:EditProductComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'logout', component:LoginComponent},
  {path:'register', component:NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
